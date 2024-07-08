import { Router } from 'express';
import { test, updateUser, deleteUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = Router();

/**
 * @swagger
 * /users/test:
 *   get:
 *     summary: Test API endpoint
 *     tags:
 *       - User
 *     responses:
 *       '200':
 *         description: API route is working
 */
router.get('/test', test);

/**
 * @swagger
 * /users/update/{id}:
 *   post:
 *     summary: Update user information
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID to update
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
 *               avatar:
 *                 type: string
 *             example:
 *               username: newusername
 *               email: newemail@example.com
 *               password: newpassword123
 *               avatar: https://example.com/avatar.jpg
 *     responses:
 *       '200':
 *         description: User information updated successfully
 *       '401':
 *         description: You can only update your own account
 *       '500':
 *         description: Error updating user information
 */
router.post('/update/:id', verifyToken, updateUser);

/**
 * @swagger
 * /users/delete/{id}:
 *   delete:
 *     summary: Delete user account
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID to delete
 *     responses:
 *       '200':
 *         description: User has been deleted
 *       '401':
 *         description: You can only delete your own account
 *       '500':
 *         description: Error deleting user account
 */
router.delete('/delete/:id', verifyToken, deleteUser);

export default router;
