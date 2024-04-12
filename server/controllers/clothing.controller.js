import Clothing from "../models/clothing.model.js";
import AppError from "../utils/error.util.js";

const getAllClothings=async(req,res,next)=>{
    try{
        const clothings=await Clothing.find({
            status:true});
        if(!clothings){
            return next(new AppError("No clothings ",500))
        }
        res.status(200).json({
            success:true,
            message:"All clothings fetched succesfully",
            clothings
        })
    }catch(error){
        return next(new AppError(error.message, 500));
    }
}
const createNewClothing=async(req,res,next)=>{
    const {clothing_category,clothing_type,colors,rate} = req.body
    if (!clothing_category || !clothing_type || !colors || !rate ){
        return next(
            new AppError("all field are required",400)
             
        )
    }

try {
    
    const cloth = await Clothing.create({
        clothing_category,
        clothing_type,
        colors,
        rate

    })
    if(!cloth) {
        return next ( 
            new AppError ('cloth coould not create, please try again', 500)

            
        )
    }

    if ( req.file){
        const result = await cloudinary.v2.uploader.upload(req.file.path,{
            folder :'lms'

        });
        if(result) {
            cloth.thumbnail.public_id = result.public_id;
            cloth.thumbnail.secure_url = result.secure_url;
        }
    }
    fs.rm(`upload/${req.file.filename}`);

    await cloth.save();
    res.status(200).json({
        success:true,
        message:'cloth created sucessfullly',
        course
    })


  }
 

catch (error) {
    return next(new AppError(error.message, 500));
    
}


}



export {getAllClothings,createNewClothing}