import mongoose from "mongoose";

// Define the Quiz Result Schema
const quizSchema = new mongoose.Schema({
    name: { type: String, required: true },
    marks: { type: Number, required: true },
    semester: { type: String, required: true },
    subject: { type: String, required: true },
    unit: { type: String, required: true },
    subjectId: { type: String, required: true }
});

// Create a model based on the schema
const QuizData = mongoose.model('QuizData', quizSchema);

export default QuizData;
