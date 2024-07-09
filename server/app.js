import express from 'express';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import quizRoutes from './routes/quiz.route.js';
import swaggerSetup from './utils/swaggerSetup.js';
import cors from 'cors';

const app = express();
app.use(cors({
    origin: 'https://quizy0.netlify.app/',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/quizzes', quizRoutes);

swaggerSetup(app);

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