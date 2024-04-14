import  Express  from "express";
import makeOrder from "../controllers/order.controller.js";
const router = Express.Router();
router.route('/order').post(makeOrder)
router.route('/getOrder').get(getAllorders)



export default router;