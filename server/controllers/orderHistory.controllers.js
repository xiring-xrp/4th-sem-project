import Order from "../models/order.model.js";
import AppError from "../utils/error.util.js";

const getOrderHistory = async (req, res , next) => {

    try{
        const id = req.user.id;
        console.log(id);
        
        const order =  await Order.find({userId:id}).sort({createdAt:-1});
        console.log (order);
        if(!order){
            
            return next( new AppError("no order find",500))
        }    
    
        res.status(200).json({
            success:true,
            message:"order  fetched succesfully",
            order
        })
    }
    catch(error){
        return next(new AppError(error.message, 500));
      }
    }
    export default getOrderHistory ;
    