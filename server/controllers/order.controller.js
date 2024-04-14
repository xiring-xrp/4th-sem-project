import Order from "../models/order.model.js";
import AppError from "../utils/error.util.js";

const makeOrder = async (req , res , next) =>{
    const {userId,measurementId, clothing_type,fabric, color, rate} = req.body
    if(  !clothing_type || !fabric || !color ) {
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
            measurementId
            
        })

        if (!order){
            return next (
                new AppError('order could not crete, please try again', 500)
            )
        }

       
        res.status(200).json({
            succes:true,
            message:'created sucessfully',
            order
        })
        
    } catch (error) {
        return next (new AppError(error.message, 500))
        
    }
   

}
export default makeOrder
