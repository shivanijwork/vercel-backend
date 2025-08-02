import { connect } from 'mongoose';
import { disconnect } from 'process';
import dotenv from 'dotenv';
dotenv.config();
async function connectToDatabase() {
    try {
        // console.log("✅ Final Mongo URI:", process.env.MONGODB_URL);
        if (!process.env.MONGODB_URL) {
            throw new Error("MONGODB_URL is not defined in the environment variables");
        }
        // console.log("Trying to connect with URI:", process.env.MONGODB_URL);
        await connect(process.env.MONGODB_URL);
        // console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
        // console.log("Disconnected from MongoDB");
    }
    catch (error) {
        console.error("Error disconnecting from MongoDB:", error);
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map