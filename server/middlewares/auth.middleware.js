import AppError from "../utils/error.util.js";
import jwt from "jsonwebtoken";
const isLoggedIn = async  (req , res , next) =>{
    const {token} = req.cookies;
    // console.log(token);
    if (!token){
        return next (new AppError('unathenticated ,please login again',400))   
    }
    const userDetails =  await jwt.verify(token,process.env.JWT_SECRET);
    req.user = userDetails;
    next ();

}
export default isLoggedIn
