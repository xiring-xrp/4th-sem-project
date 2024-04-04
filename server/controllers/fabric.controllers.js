import Fabric from "../models/fabric.model.js";
import AppError from "../utils/error.util.js";

const getAllFabrics=async(req,res,next)=>{
    try{
        const fabrics=await Fabric.find({
            status:true});
        if(!fabrics){
            return next(new AppError("No clothings ",500))
        }
        res.status(200).json({
            success:true,
            message:"All fabric fetched succesfully",
            fabrics
        })
    }catch(error){
        return next(new AppError(error.message, 500));
    }
}
export {
    getAllFabrics
}