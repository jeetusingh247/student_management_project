import express from 'express';
import { saveQuizResult } from '../controller/quizController.js';

const router = express.Router();

// Define route to save quiz result
router.post('/saveQuizResult', saveQuizResult);

export default router; // Use `export default` for exporting the router
