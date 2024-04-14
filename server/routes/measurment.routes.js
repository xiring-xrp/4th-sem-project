import Express  from "express";
import giveMeasurment from "../controllers/measurment.controllers.js";
import isLoggedIn from "../middlewares/auth.middleware.js";
const router =Express.Router();
router.route('/create').post(isLoggedIn,giveMeasurment);

export default router ;
