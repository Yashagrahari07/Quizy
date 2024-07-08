import { Router } from 'express';
import { signup, signin, signout } from '../controllers/auth.controller.js';

const router = Router();

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               username: user123
 *               email: user@example.com
 *               password: password123
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '500':
 *         description: Error creating user
 */
router.post("/signup", signup);

/**
 * @swagger
 * /auth/signin:
 *   post:
 *     summary: User sign in
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: user@example.com
 *               password: password123
 *     responses:
 *       '200':
 *         description: User authenticated successfully
 *       '401':
 *         description: Wrong credentials
 *       '404':
 *         description: User not found
 */
router.post("/signin", signin);

/**
 * @swagger
 * /auth/signout:
 *   get:
 *     summary: User sign out
 *     tags:
 *       - Authentication
 *     responses:
 *       '200':
 *         description: User has been logged out
 *       '500':
 *         description: Error logging out user
 */
router.get('/signout', signout);

export default router;
