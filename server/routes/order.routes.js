import Express from "express";
import { getAllorders, makeOrder, updateOrderStatus } from "../controllers/order.controller.js";

const router = Express.Router();
router.route('/create').post(makeOrder)
router.route('/getOrder').get(getAllorders)
router.put("/update/order_status/:orderId",updateOrderStatus);


export default router;