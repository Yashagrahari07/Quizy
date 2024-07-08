import { Router } from 'express';
import { createQuiz, getQuiz, submitQuiz, getQuizResults } from '../controllers/quiz.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = Router();

/**
 * @swagger
 * /quizzes/create:
 *   post:
 *     summary: Create a new quiz
 *     tags:
 *       - Quiz
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               questions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     question:
 *                       type: string
 *                     options:
 *                       type: array
 *                       items:
 *                         type: string
 *                     correctAnswer:
 *                       type: string
 *                     image:
 *                       type: string
 *               settings:
 *                 type: object
 *                 properties:
 *                   timer:
 *                     type: number
 *                   numberOfQuestions:
 *                     type: number
 *             example:
 *               title: My Quiz
 *               questions:
 *                 - question: Question 1
 *                   options: ["Option 1", "Option 2", "Option 3", "Option 4"]
 *                   correctAnswer: Option 1
 *                   image: https://example.com/image.jpg
 *               settings:
 *                 timer: 60
 *                 numberOfQuestions: 10
 *     responses:
 *       '201':
 *         description: Quiz created successfully
 *       '500':
 *         description: Error creating quiz
 */
router.post('/create', verifyToken, createQuiz);

/**
 * @swagger
 * /quizzes/{url}:
 *   get:
 *     summary: Get quiz by URL
 *     tags:
 *       - Quiz
 *     parameters:
 *       - in: path
 *         name: url
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique URL of the quiz
 *     responses:
 *       '200':
 *         description: Quiz fetched successfully
 *       '404':
 *         description: Quiz not found
 *       '500':
 *         description: Error fetching quiz
 */
router.get('/:url', getQuiz);

/**
 * @swagger
 * /quizzes/{url}/submit:
 *   post:
 *     summary: Submit quiz answers
 *     tags:
 *       - Quiz
 *     parameters:
 *       - in: path
 *         name: url
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique URL of the quiz
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               answers:
 *                 type: array
 *                 items:
 *                   type: string
 *             example:
 *               name: John Doe
 *               answers: ["Option 1", "Option 2", "Option 3"]
 *     responses:
 *       '200':
 *         description: Quiz submitted successfully
 *       '404':
 *         description: Quiz not found
 *       '500':
 *         description: Error submitting quiz
 */
router.post('/:url/submit', submitQuiz);

/**
 * @swagger
 * /quizzes/{url}/results:
 *   get:
 *     summary: Get quiz results by URL
 *     tags:
 *       - Quiz
 *     parameters:
 *       - in: path
 *         name: url
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique URL of the quiz
 *     responses:
 *       '200':
 *         description: Quiz results fetched successfully
 *       '404':
 *         description: Quiz not found
 *       '500':
 *         description: Error fetching quiz results
 */
router.get('/:url/results', getQuizResults);

export default router;
