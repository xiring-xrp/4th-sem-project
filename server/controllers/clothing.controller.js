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
export {getAllClothings}