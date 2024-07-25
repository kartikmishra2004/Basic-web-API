import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const DB_URL = 'mongodb://localhost:27017/school';
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB is connected!!");
    } catch (error) {
        console.log("Error connecting to MongoDB");
    }
}

export default connectDB;