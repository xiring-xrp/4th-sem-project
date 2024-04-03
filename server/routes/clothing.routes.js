import express from 'express';
import { getAllClothings } from '../controllers/clothing.controller.js';
const router=express.Router();
router.get("/getAllClothings",getAllClothings)
export default router;