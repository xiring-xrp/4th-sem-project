import  Express  from "express";
import {  getAllFabrics } from "../controllers/fabric.controllers.js";
const router = Express.Router();
router.get("/getAll",getAllFabrics);

export default router ;
