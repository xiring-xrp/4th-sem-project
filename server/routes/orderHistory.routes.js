import  Express  from "express";
import getOrderHistory from "../controllers/orderHistory.controllers.js";
import isLoggedIn from "../middlewares/auth.middleware.js";
const router = Express.Router();
router.get("/getOrderHistory" ,isLoggedIn ,getOrderHistory);

export default router ;