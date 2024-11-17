import QuizData from "../models/Quiz.model.js";

// Controller to handle saving quiz result data
export const saveQuizResult = async (req, res) => {
    const { name, marks, semester, subject, unit, subjectId } = req.body;

    try {
        // Log the received data from the request body
        console.log('Data received from request body:', req.body);

        // Create a new instance of the QuizData model
        const quizResult = new QuizData({
            name,
            marks,
            semester,
            subject,
            unit,
            subjectId
        });

        // Save the quiz result to the database
        await quizResult.save();

        // Send a success response
        res.status(200).json({ message: 'Quiz result saved successfully!' });
    } catch (error) {
        // Log any error that occurs
        console.error('Error saving quiz result:', error.message);
        
        // Send an error response
        res.status(500).json({ message: 'Error saving quiz result: ' + error.message });
    }
};
