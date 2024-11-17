// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const natural = require('natural');
const Fuse = require('fuse.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Simple in-memory storage for questions and answers
const questions = [
    { id: 1, question: "Hello?", answer: "Hello I'm StudyBot, Your StudyBuddy, How Can I assist you today?" },
    { id: 1, question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { id: 2, question: "What is Nodejs?", answer: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine." },
    // Add more questions and answers here
];

// Initialize the natural language processing tools
const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;

// Initialize Fuse.js for fuzzy searching
const fuse = new Fuse(questions, {
    keys: ['question'],
    threshold: 0.4, // Adjust the threshold for fuzzy matching
});

app.post('/api/chatbot', (req, res) => {
    const { message } = req.body;
    const tokens = tokenizer.tokenize(message.toLowerCase());
    const stemmedTokens = tokens.map(token => stemmer.stem(token));
    const processedMessage = stemmedTokens.join(' ');

    const result = fuse.search(processedMessage);
    if (result.length > 0) {
        res.json({ reply: result[0].item.answer });
    } else {
        const recommendations = fuse.search(processedMessage).slice(0, 3).map(r => r.item.question);
        res.json({ reply: "Sorry, I don't understand that question.", recommendations });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});