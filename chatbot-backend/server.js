import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'; // Import dotenv for environment variables
import chatbotRoutes from './routes/chatbot.routes.js'
import connectToMongoDB from './config/db.js';

const app = express();

// Configure dotenv to load environment variables
dotenv.config();

connectToMongoDB();
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api',chatbotRoutes );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
