import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    const mongoURI = process.env.MONGO_URL; // Read the MongoDB URL from .env

    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process if the connection fails
    }
};

export default connectToMongoDB;
