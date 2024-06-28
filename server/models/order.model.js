import { Schema, model } from "mongoose";
const OrderSchema = new Schema({
   userId:{
    type:Schema.Types.ObjectId,
    ref:'user'

   },
   measurementId:{
    type:Schema.Types.ObjectId,
    ref:'Measurement'
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

   order_status:{
    type:String,
    enum:['Processing','Completed'],
    default:'Processing'
   },
    status:{
        type:Boolean,
        default:true

    },
    rate:{
        type: String,
        required:true
    }
},{timestamps:true});

const Order = model('Order', OrderSchema );
export default Order;
