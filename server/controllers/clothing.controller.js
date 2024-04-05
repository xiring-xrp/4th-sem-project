import Clothing from "../models/clothing.model.js";
import AppError from "../utils/error.util.js";

const getAllClothings = async (req, res, next) => {
    try {
        const clothings = await Clothing.find({
            status: true
        });
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
        const { clothing, clothing_category } = req.body;

        // Extract fabrics and colors from clothing_category
        const { fabrics, colors, clothing_type } = clothing_category[0];
        const fabricArray=[];
        fabrics.map((fabric,index)=>{
            if(index!=0){
                return fabricArray.push(fabric);
            }
        })
        
        const cloth = await Clothing.create({
            clothing,
            clothing_category: {
                clothing_type,
                fabrics:fabricArray,
                colors
            }

        });
        

        // Save the document to the database


        // Handle file upload if exists
        if (req.file) {
            // Handle file upload to Cloudinary
            const result = await cloudinary.v2.uploader.upload(req.file.path, {
                folder: 'lms'
            });

            // Update newClothing with Cloudinary response
            // (Ensure 'thumbnail' is correctly defined in your schema)
            if (result) {
                cloth.clothing_category[0].thumbnail = {
                    public_id: result.public_id,
                    secure_url: result.secure_url
                };
            }

            // Remove uploaded file
            // fs.rmSync(req.file.path);
        }

        res.status(200).json({
            success: true,
            message: 'Cloth created successfully',
            data: newClothing
        });
    } catch (error) {
        // Handle errors
        return next(new AppError('Clothing could not be created', 400));
    }
};




export { getAllClothings, createNewClothing }