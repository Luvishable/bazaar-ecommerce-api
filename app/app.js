import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import dbConnect from '../config/dbConnect.js';
import userRoutes from '../routes/usersRoute.js';
import {
    globalErrorHandler,
    notFound,
} from '../middlewares/globalErrorHandler.js';

// Database connection
dbConnect();

const app = express();

// parsing json
app.use(express.json());
// routes
app.use('/', userRoutes);

// error middleware
app.use(notFound);
app.use(globalErrorHandler);

export default app;
