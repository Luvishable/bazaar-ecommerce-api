import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import dbConnect from '../config/dbConnect.js';

// Database connection
dbConnect();

const app = express();

export default app; 

// 6UKjPLunf0R4cOcw ahmetfaruklacin48