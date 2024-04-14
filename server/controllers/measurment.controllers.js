
import Measurement from "../models/measurement.model.js";
import AppError from "../utils/error.util.js";
const giveMeasurment = async (req, res, next) => {
            
                const {Neck, SLEVAS_LENGTH, SHOULDER_WIDTH, CHEST_AROUND, STOMACH, LEG_LENGTH, PAINTS_WAIST, HIPS, BICEP_AROUND,THIGH } = req.body;


               if( !Neck || !SLEVAS_LENGTH || !SHOULDER_WIDTH || !CHEST_AROUND || !STOMACH ||  !LEG_LENGTH  || !PAINTS_WAIST || !HIPS || !BICEP_AROUND || !THIGH ){
                   return next (
                    new AppError ("all field are required", 400)
                   )
                   
               }
             try {
                const measure = await Measurement.create({
                    Neck,
                    SLEVAS_LENGTH,
                    SHOULDER_WIDTH,
                    CHEST_AROUND,
                    STOMACH,
                    LEG_LENGTH,
                    STOMACH,
                    LEG_LENGTH,
                    PAINTS_WAIST,
                    HIPS,
                    BICEP_AROUND,
                    THIGH





                })


                if(!measure){
                    return next (
                        new AppError('measurment cant taken',500)
                    )
                }

                await measure.save();
                res.status(200).json({
                    succes:true,
                    message:'created sucessfully',
                    order
                })
             } catch (error) {
                return next (new AppError(error.message, 500))
                
             }


 }
 
export default giveMeasurment ;

    

