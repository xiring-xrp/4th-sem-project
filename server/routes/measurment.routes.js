import Express  from "express";
import giveMeasurment from "../controllers/measurment.controllers.js";
const router =Express.Router();
router.route('/takeMeasurment').post(giveMeasurment);

export default router ;
