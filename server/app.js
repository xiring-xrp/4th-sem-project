import   express from 'express';
const app = express();
import  cors from 'cors';
import  cookieParser from 'cookie-parser';
import  { config } from 'dotenv';
config();
import morgan from 'morgan';
import useroutes from './routes/user.routes.js'
import errormiddleware from './middlewares/error.middleware.js';
import clothingRoutes from './routes/clothing.routes.js'
import fabricRouter from './routes/fabric.routes.js';
import orderRouter from './routes/order.routes.js';
import takeMeasurment from './routes/measurment.routes.js'


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser());
app.use (morgan('dev')); // console random requested 
app.use('/ping', function(req,res){
    res.send('/pong');
});

//rotes of 3 model
app.use('/api/v1/user',useroutes );
app.use('/api/v1/clothing',clothingRoutes );
app.use('/api/v1/fabric',fabricRouter);
app.use('/api/v1/order',orderRouter);
app.use('/api/v1/takeMeasurment',takeMeasurment);


app.all('*',(req, res) =>{
    res.status(400).send('opps!! 404 page is not find '); // res if random request is send in port 
});

app.use (errormiddleware);
export default app;

