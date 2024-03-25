import express from "express";  
import {  login, logout, register, forgotPassword, resetPassword, changePassword } from '../controllers/user.controllers.js';
import  isLoggedIn  from '../middlewares/auth.middleware.js';
import upload from "../middlewares/multer.middlewaare.js";

const router = express.Router();
router.post('/register',  upload.single("avatar"), register);
router.post('/login', login);
router.get('/logout', logout);
//router.get('/me', isLoggedIn, getProfile);
router.post('/forgot-password',forgotPassword);
router.post('/reset-password',resetPassword);
router.post('/change-password',isLoggedIn,changePassword);
router.put('/update/:id', isLoggedIn)








export default router;