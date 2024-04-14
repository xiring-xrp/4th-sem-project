import Express  from "express";
import { giveMeasurement,  getMeasurement, updateMeasurment } from "../controllers/measurment.controllers.js";
import isLoggedIn from "../middlewares/auth.middleware.js";
const router =Express.Router();
router.route('/create').post(isLoggedIn, giveMeasurement);
router.route('/getMeasurement').get(isLoggedIn, getMeasurement);
router.route('/updateMeasurment').put(isLoggedIn, updateMeasurment )

export default router ;
