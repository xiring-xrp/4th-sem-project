import app from './app';
import {} from 'dotenv/config'
import connectToDB from './config/DBConnect';
const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    connectToDB();
    console.log(`Server is running on http://localhost:${PORT}`)
});