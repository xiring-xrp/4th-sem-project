import { Schema, model } from "mongoose";

const measurementSchema = new Schema({
  
            neck: {
                type: String,
                required: true
            },
            sleevesLength: {
                type: String,
                required: true
            },
            shoulderWidth: {
                type: String,
                required: true

            },
            chestAround: {
                type: String,
                required: true
            },

            stomach:{
                type: String,
                required: true

            },

            legLength:{
                type: String,
                required: true

            },

            pantsWaist:{
                type: String,
                required: true

            },

            hips:{
                type: String,
                required: true

            },
            bicepAround:{
                type: String,
                required: true

            },
            thigh:{
                type: String,
                required: true

            },
            status:{
                type:Boolean,
                default:true
            }

}, {timestamps:true})
const Measurement = model('Measurement', measurementSchema);

export default Measurement ;