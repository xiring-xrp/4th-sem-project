import app from'./app.js';
import connectionToDb from './config/dbConnection.js';
import cloudinary from 'cloudinary';
  
     //cloudinary configaration
const PORT = process.env.PORT || 5000 ;
    cloudinary.v2.config({
        cloud_name: 'dluktmyew',
        api_key : '522326358981918',
        api_secret:'4Tfl7euReoQEwLNNxRr3wazgJwg',
    });
    app.listen (PORT,  async () =>{
        await connectionToDb();
        console.log(`app is running at http:localhost:${PORT}`)
})