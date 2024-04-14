import Clothing from "../models/clothing.model.js";
import AppError from "../utils/error.util.js";
import fs from 'fs/promises'
import cloudinary from 'cloudinary';
const getAllClothings = async (req, res, next) => {
    try {
        const clothings = await Clothing.find({
            status: true
        }).populate('clothing_category.fabrics.fabricId') 
        if (!clothings) {
            return next(new AppError("No clothings ", 500))
        }
        res.status(200).json({
            success: true,
            message: "All clothings fetched succesfully",
            clothings
        })
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
}
const createNewClothing = async (req, res, next) => {
    try {
        // Extract clothing and clothing_category from req.body
        const { clothing, clothing_category } = req.body;

        // Extract fabrics, colors, and clothing_type from clothing_category
        const { fabrics, colors, clothing_type } = clothing_category;

        // Filter out the empty fabric (assuming it's at index 0)
        const fabricArray = fabrics.filter((fabric, index) => index !== 0);

        // Find if the clothing already exists
        let cloth = await Clothing.findOne({ clothing });

        if (cloth) {
            // If clothing exists, update it
            cloth.clothing_category.push({
                clothing_type,
                fabrics: fabricArray,
                colors,
                thumbnail: { public_id: 'Hi', secure_url: 'Hello' } // Initialize thumbnail
            });
        } else {
            // If clothing does not exist, create a new one
            cloth = await Clothing.create({
                clothing,
                clothing_category: [{
                    clothing_type,
                    fabrics: fabricArray,
                    colors,
                    thumbnail: { public_id: 'Hi', secure_url: 'Hello' } // Initialize thumbnail
                }]
            });
        }

        // Handle file upload if it exists
        if (req.file) {
            try {
                // Handle file upload to Cloudinary
                const result = await cloudinary.v2.uploader.upload(req.file.path, {
                    folder: 'lms'
                });

                // Check if the upload was successful
                if (result && result.public_id && result.secure_url) {
                    // Update the thumbnail of the latest clothing category
                    cloth.clothing_category[cloth.clothing_category.length - 1].thumbnail = {
                        public_id: result.public_id,
                        secure_url: result.secure_url
                    };
                } else {
                    // Handle the case where Cloudinary upload was unsuccessful
                    console.error('Cloudinary upload failed or response is incomplete:', result);
                }
            } catch (error) {
                // Handle any errors that occur during the upload process
                console.error('Error uploading image to Cloudinary:', error);
            } finally {
                // Remove uploaded file
                fs.rm(`uploads/${req.file.filename}`)
            }
        }

        // Save the cloth document
        await cloth.save();

        // Send response
        res.status(200).json({
            success: true,
            message: 'Cloth created successfully',
            data: cloth
        });
    } catch (error) {
        console.error('Error creating clothing:', error);
        // Handle errors
        return next(new AppError('Clothing could not be created', 400));
    }
};

    





export { getAllClothings, createNewClothing }