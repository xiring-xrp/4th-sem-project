import { Schema, model } from "mongoose";
const OrderSchema = new Schema({
   userId:{
    type:Schema.Types.ObjectId,
    ref:'User'

   },
   measurementId:{
    type:Schema.Types.ObjectId,
    ref:'Measurement'
   },
   clothing:{
    type:String ,
    required:true
   },
   clothing_type:{
    type:String ,
    required:true
   },
   fabric:{
    type:String ,
    required:true
   },
   color:{
    type:String ,
    required:true
   },
    status:{
        type:Boolean,
        default:true

    },
    price:{
        type: String,
        default: true
    }
},{timestamps:true});

const Order = model('Order', OrderSchema );
export default Order;
