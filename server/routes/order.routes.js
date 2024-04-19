import Express from "express";
import { getAllorders, makeOrder } from "../controllers/order.controller.js";
const router = Express.Router();
router.route('/create').post(makeOrder)
router.route('/getOrder').get(getAllorders)



export default router;