import { Router } from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createQuiz, getQuiz, submitQuiz, getQuizResults } from '../controllers/quiz.controller.js';

const router = Router();

router.post('/create', verifyToken, createQuiz);
router.get('/:url', getQuiz);
router.post('/:url/submit', submitQuiz);
router.get('/:url/results', getQuizResults);

export default router;
