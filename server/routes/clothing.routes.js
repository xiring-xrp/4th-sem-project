import express from 'express';
import upload from "../middlewares/multer.middlewaare.js";
import { createNewClothing, deleteClothing, getAllClothings } from '../controllers/clothing.controller.js';
const router=express.Router();
router.get("/getAllClothings",getAllClothings)
router.post("/create",upload.single('clothing_category[thumbnail]'),createNewClothing)
router.delete("/delete/:id",deleteClothing)
export default router;