import app from './app.js';
import connectionToDb from './config/dbConnection.js';
import { v2 as cloudinary } from 'cloudinary';

//cloudinary configaration
const PORT = process.env.PORT || 5000;

cloudinary.config({
    cloud_name: "dluktmyew",
    api_key: "522326358981918",
    api_secret: "4Tfl7euReoQEwLNNxRr3wazgJwg"
})
app.listen(PORT, async () => {
    await connectionToDb();
    console.log(`app is running at http:localhost:${PORT}`)
})