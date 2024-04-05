import { model,Schema } from "mongoose";
const fabricSchema=new Schema({

         thumbnail:{
            public_id:{
                type:String,
                required:true
            },
            secure_url:{
                type:String,
                required:true
            }
        },
            fabric_name:{
                type:String,
                required:true
            },
            fabric_rate:{
                type:Number,
                required:true
            },
        
    
    status:{
        type:Boolean,
        default:true

    },



    
},{timestamps:true})

const Fabric=model("Fabric",fabricSchema,'fabrics');
export default Fabric;