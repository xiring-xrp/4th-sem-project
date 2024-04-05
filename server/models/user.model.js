import { Schema, model } from "mongoose";
import bcrypt  from "bcryptjs"
import Jwt from "jsonwebtoken";
import crypto from "crypto";
const userSchema = new Schema({
    fullName: {
        type :String ,
        required:[true, 'name must be required'],
        maxLength:[ 50,'name must be less than 50 char '],
        minLength:[6, 'name must be greater than 6 '],
        trim: true,
    },
    email:{
        type:String,
        required:[true,' email must be required'],
        lowercase: true,
        trim: true,
        unique:true,
    },
    password :{
        type:String,
        required:[true,' password must be required '],
        minLength:[8, 'password have at least 8 char'],
        select: false,

    },
    avatar:{
        public_id:{
            type:String,
        },
        secure_url:{
            type:String
        }
    },
    role: {
        type: String,
        enum:['USER','ADMIN','SUPERADMIN'],
        default: 'USER'

    },
    forgetPasswordToken: String,
    fotgerPasswordExpiry:Date,



},{

   timestamps :true

});




userSchema.pre('save',  async function(next){
    if(!this.isModified('password')){
        return next();

    }
    this.password =  await bcrypt.hash(this.password,10);
})
 

userSchema.methods = {
    generateJWTToken : async function (){
        return await Jwt.sign({
            id: this._id , email: this.email, subscription: this.subscription,role: this.role}
            ,process.env.JWT_SECRET,
                {expiresIn: process.env.JWT_EXPIRY}
        )
    },


    comparePassword:  async function(plainTextPassword){
        return bcrypt.compare(plainTextPassword, this.password)
    },

    
    generatePasswordResetToken : async function (){
        const resetToken = crypto.randomBytes(20).toString('hex');
       
        this.forgetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        this.fotgerPasswordExpiry = Date.now() + 15*60*1000;

        return resetToken


    }

}



const User = model('user', userSchema); // User is the name of the collection of database whcich model is designed

export default User;