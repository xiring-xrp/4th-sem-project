import { model,Schema } from "mongoose";
const clothingSchema=new Schema({
    clothing:{
        type:String,
        required:[true,"Clothing category is required"],
        unique:[true,"Category already available"]
    },
    // thumbnail:{
    //     public_id:{
    //         type:String,
    //         required:true
    //     },
    //     secure_url:{
    //         type:String,
    //         required:true
    //     }
    // },
    clothing_category:[{
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
        clothing_type:{
            type:String,
            required:true
        },
      fabrics:[{fabricId:{
        type:Schema.Types.ObjectId,
        ref:"Fabric"
    }}],
        colors:[
            {
                type:String,
                required:true
            }
        ],
    }
    ],
    status:{
        type:Boolean,
        default:true
    }
},{timestamps:true});

const Clothing=model('Clothing',clothingSchema,'clothings');
export default Clothing;