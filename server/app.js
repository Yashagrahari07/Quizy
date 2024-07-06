import express from 'express';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';

const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

export default app;