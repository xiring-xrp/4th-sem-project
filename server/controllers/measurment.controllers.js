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

export default giveMeasurement;
