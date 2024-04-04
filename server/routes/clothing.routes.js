import express from 'express';
import { createNewClothing, getAllClothings } from '../controllers/clothing.controller.js';
const router=express.Router();
router.get("/getAllClothings",getAllClothings)
router.post("/create",createNewClothing)
export default router;