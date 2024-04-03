import { Schema, model } from "mongoose";

const measurementSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    measurements: [
        {
            height: {
                type: String,
                required: true
            },
            weight: {
                type: String,
                required: true
            }
        }
    ]
})