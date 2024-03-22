import express from 'express';
import userRoutes from './routes/userRoutes'
import errorMiddleware from './middlewares/errorMiddleware';
import cors from 'cors';
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
      origin: 'http://localhost:5173',
      credentials: true,
    })
  );
app.use("/api/user",userRoutes);
app.use(errorMiddleware);
export default app;