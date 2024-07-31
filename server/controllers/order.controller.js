import Order from "../models/order.model.js";
import AppError from "../utils/error.util.js";

const makeOrder = async (req , res , next) =>{
    const {userId,measurementId, clothing_type,fabric, color, rate,price} = req.body
    if(  !clothing_type || !fabric || !color ||!price ) {
        return next (
            new AppError (" all field are required",400)
        )
    }
    try {
        const order = await Order.create({
            userId,
            clothing_type,
            fabric,
            color,
            rate,
            price,
            measurementId
            
        })

        if (!order){
            return next (
                new AppError('order could not crete, please try again', 500)
            )
        }

       
        res.status(200).json({
            success:true,
            message:'created sucessfully',
            order
        })
        
    } catch (error) {
        return next (new AppError(error.message, 500))
        
    }
}
   

    const getAllorders = async (req,res,next) =>{
        try{
            const orders=await Order.find({
                status:true}).populate("measurementId userId");
            if(!orders){
                return next(new AppError("No orders ",500))
            }
            res.status(200).json({
                success:true,
                message:"All order fetched succesfully",
                orders
            })
        }catch(error){
            return next(new AppError(error.message, 500));
        }
    
    }
    const updateOrderStatus=async(req,res,next)=>{
        const orderId=req.params.orderId;
        const {order_status}=req.body
        try{
            const order=await Order.findByIdAndUpdate(orderId,{order_status});
            res.status(200).json({
                success:true,
                message:"Status updated successfully",
                order
            })
        }catch(error){
            return next(new AppError(error.message,500));
        }
        
    }


export {
    getAllorders, makeOrder, updateOrderStatus
};

