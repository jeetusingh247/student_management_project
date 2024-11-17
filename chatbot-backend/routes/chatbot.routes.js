import express from 'express';
import getChatbotReply from '../controller/chatbot.controller.js';


const router = express.Router();

// Define the route for the chatbot
router.post('/chatbot', getChatbotReply);

export default router;
