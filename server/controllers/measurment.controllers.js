import Measurement from "../models/measurement.model.js";
import AppError from "../utils/error.util.js";
import User from "../models/user.model.js";

const giveMeasurement = async (req, res, next) => {
    const id = req.user.id;
    const {
        neck,
        sleevesLength,
        shoulderWidth,
        chestAround,
        stomach,
        legLength,
        pantsWaist,
        hips,
        bicepAround,
        thigh
    } = req.body;

    try {
        const measure = await Measurement.create({
            neck,
            sleevesLength,
            shoulderWidth,
            chestAround,
            stomach,
            legLength,
            pantsWaist,
            hips,
            bicepAround,
            thigh
        });

        const user = await User.findByIdAndUpdate(id, {
            measurementId: measure._id
        });

        if (!measure || !user) {
            return next(new AppError('Measurement creation failed', 500));
        }

        res.status(200).json({
            success: true,
            message: 'Measurement created successfully',
            measure // Sending the newly created measurement data
        });
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
}


const getMeasurement = async (req, res , next) => {

try{
    const id = req.user.id;
    
    const user =  await User.findById(id 
        ).populate("measurementId");
        console.log(user);
    const measurement=user.measurementId;
    console.log(measurement);
    if(!measurement){
        return next( new AppError("no measurment find please provife your measurment first",500))
    }    

    res.status(200).json({
        success:true,
        message:"Measurment fetched succesfully",
        measurement
    })
}
catch(error){
    return next(new AppError(error.message, 500));
  }
}



const updateMeasurment =async (req, res , next) => {
    try {
        const userID = req.user.id;
        const measurement = await User.findByIdAndUpdate(
            userID,
            {
                $set: req.body,
            },
            {
                runValidators:true,

            }
        
        );

        if(!measurement) {
            return next (new AppError('invalid id or  user not found ', 400));
        }

        res.status(200).json({
            success: true,
            message: 'measurment updated successfully',
        });

    } catch (error) {
        return next(new AppError(error.message, 500));
       

        
    }

    

}
export {
    giveMeasurement,
    getMeasurement,
    updateMeasurment


}
