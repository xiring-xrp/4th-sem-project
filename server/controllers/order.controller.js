import Order from "../models/order.model.js";
import AppError from "../utils/error.util.js";

const makeOrder = async (req , res , next) =>{
    const {clothing, clothing_type,fabric, color, deliveryAddress} = req.body
    if(!clothing || !clothing_type || fabric || !color || !deliveryAddress) {
        return next (
            new AppError (" all field are required",400)
        )
    }
    try {
        const order = await Order.create({
            clothing,
            clothing_type,
            fabric,
            color,
            deliveryAddress
        })

        if (!order){
            return next (
                new AppError('order could not crete, please try again', 500)
            )
        }

        await order.save();
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