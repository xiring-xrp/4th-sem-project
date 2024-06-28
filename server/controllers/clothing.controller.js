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
        console.log(clothings)
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
            if(cloth.clothing=='Suits'){
                cloth.cloth_thumbnail.public_id="lms/apgeaospz5qouvt8bl5q"
                cloth.cloth_thumbnail.secure_url="https://res.cloudinary.com/dluktmyew/image/upload/v1712071460/lms/apgeaospz5qouvt8bl5q.png"
            }else if(cloth.clothing=='Coats'){
                cloth.cloth_thumbnail.public_id="lms/iwtuj0gdcv1bbbjmgcxi"
                cloth.cloth_thumbnail.secure_url="https://res.cloudinary.com/dluktmyew/image/upload/v1712854426/lms/iwtuj0gdcv1bbbjmgcxi.jpg"
            }else if(cloth.clothing=='Shirts'){
                cloth.cloth_thumbnail.public_id="lms/hfwzwmcburluwttmlkvx"
                cloth.cloth_thumbnail.secure_url="https://res.cloudinary.com/dluktmyew/image/upload/v1713618012/lms/hfwzwmcburluwttmlkvx.jpg"
            }else if(cloth.clothing=='T-Shirts'){
                cloth.cloth_thumbnail.public_id="lms/w63dw79r2qipmg5akcb9"
                cloth.cloth_thumbnail.secure_url="https://res.cloudinary.com/dluktmyew/image/upload/v1712855546/lms/w63dw79r2qipmg5akcb9.jpg"
            }else if(cloth.clothing=='Pants'){
                cloth.cloth_thumbnail.public_id="lms/y3fh8v8zkcq7alzgputz"
                cloth.cloth_thumbnail.secure_url="https://res.cloudinary.com/dluktmyew/image/upload/v1712855907/lms/y3fh8v8zkcq7alzgputz.jpg"
            }
            await cloth.save();
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
const deleteClothing = async (req, res) => {
    try {
      const { id } = req.params;
      await Clothing.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: 'Clothing item deleted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to delete clothing item', error: error.message });
    }
  };

export { getAllClothings, createNewClothing,deleteClothing }  