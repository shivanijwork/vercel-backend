import express from 'express'; // Import the Express framework
import { config } from 'dotenv';
import morgan from 'morgan'; // Import Morgan for logging HTTP requests
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'; // Import custom CORS middleware
config(); // Load environment variables from .env file
const app = express(); // Create an Express application instance
// Middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Enable CORS for the frontend URL and allow credentials
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET)); // Use cookie-parser to parse cookies
//remove it in production
// app.use(morgan('dev')); // Use Morgan to log HTTP requests in development mode
if (process.env.NODE_ENV !== "production") {
    app.use(morgan('dev'));
}
app.use("/api/v1", appRouter);
export default app; // Export the app instance for use in other modules
// // 
// import express from 'express';
// import { config } from 'dotenv'
// import morgan from 'morgan';
// import appRouter from './routes/index.js';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// config();
// const app = express();
// // Middlewares
// app.use(cors({origin:"http://localhost:5173", credentials:true}));
// app.use(express.json());
// app.use(cookieParser(process.env.COOKIE_SECRET));
// //remove it in production
// app.use(morgan('dev'));
// // Add this root route here
// app.get("/", (req, res) => {
//   res.send("Hello from the backend!");
// });
// app.use("/api/v1", appRouter);
// export default app;
//# sourceMappingURL=app.js.map