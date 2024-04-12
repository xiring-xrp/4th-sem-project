import  Express  from "express";
import makeOrder from "../controllers/order.controller.js";
const router = Express.Router();
router.route('/order').post(makeOrder)

export default router;