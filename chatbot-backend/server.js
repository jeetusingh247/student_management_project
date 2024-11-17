// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const natural = require('natural');
const Fuse = require('fuse.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Expanded in-memory storage for questions and answers
const questions = [
    { id: 1, question: "Hello?", answer: "Hello! I'm StudyBot, your StudyBuddy. How can I assist you today?" },
    { id: 2, question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { id: 3, question: "What is Node.js?", answer: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine." },
    { id: 4, question: "What is the deadline for the assignment?", answer: "The deadline for the current assignment is next Friday." },
    { id: 5, question: "When is the next exam?", answer: "The next exam is scheduled for the 15th of this month." },
    { id: 6, question: "How can I access the syllabus?", answer: "You can access the syllabus from the 'Syllabus' section on the course page." },
    { id: 7, question: "Where can I find previous year question papers?", answer: "Previous year question papers are available in the 'PYQ' section on the course page." },
    { id: 8, question: "How do I submit my assignment?", answer: "You can submit your assignment through the 'Assignments' section on the course page." },
    { id: 9, question: "What is the grading policy?", answer: "The grading policy is outlined in the 'Grading Policy' section of the course syllabus." },
    { id: 10, question: "How can I contact my instructor?", answer: "You can contact your instructor via email or through the messaging system on the platform." },
    { id: 11, question: "What are the office hours?", answer: "Office hours are from 2 PM to 4 PM on Mondays and Wednesdays." },
    { id: 12, question: "How do I join a study group?", answer: "You can join a study group by navigating to the 'Study Groups' section and selecting a group that fits your schedule." },
    { id: 13, question: "What is the course schedule?", answer: "The course schedule is available in the 'Course Schedule' section on the course page." },
    { id: 14, question: "How do I reset my password?", answer: "You can reset your password by clicking on 'Forgot Password' on the login page and following the instructions." },
    { id: 15, question: "What is the platform's privacy policy?", answer: "The privacy policy is available at the bottom of the homepage under 'Privacy Policy'." },
    { id: 16, question: "How do I update my profile information?", answer: "You can update your profile information by navigating to the 'Profile' section and clicking on 'Edit Profile'." },
    { id: 17, question: "What resources are available for exam preparation?", answer: "Resources for exam preparation are available in the 'Resources' section on the course page." },
    { id: 18, question: "How do I access the video lectures?", answer: "Video lectures are available in the 'Video' section on the course page." },
    { id: 19, question: "What is the attendance policy?", answer: "The attendance policy is outlined in the 'Attendance Policy' section of the course syllabus." },
    { id: 20, question: "How do I register for a new course?", answer: "You can register for a new course by navigating to the 'Courses' section and selecting 'Register for a New Course'." },
    // Add more questions and answers here as needed
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