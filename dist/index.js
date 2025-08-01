// import express from 'express'; // Import the Express framework
// import app from "./app.js";
// const app = express(); // Create an Express application instance
// app.use(express.json());
// ...you can add middleware and routes here...
//Types of HTTP requests:
//GET - it means we have to get some data from the backend/server
//POST - it means we have to send some data to the backend/server
//PUT - it means we have to update some data in the backend/server
//DELETE - it means we have to delete some data from the backend/server
//middleware - it is a function that runs before the request reaches the route handler
//middleware is used to modify the request or response object, end the request-response cycle, or
//call the next middleware function in the stack
// app.post("/hello", (req, res, next) => {
//   console.log(req.body.name); // Log the request body to the console
//   // This is a route handler for POST requests to the "/hello" endpoint
//   return res.send("Hello World!"); // Send a response with the text "Hello World!"
// });
// app.put("/hello", (req, res, next) => {
//   console.log(req.body.name); // Log the request body to the console
//   return res.send("Hello World!"); // This is a route handler for PUT requests to the "/hello" endpoint
// }); // This is a route handler for PUT requests to the "/hello" endpoint
// app.listen(5000, () => console.log("Server Open")); // Start the server on port 5000 and log a message
// import express from 'express'; // Import the Express framework
// import { config } from 'dotenv'
// config(); // Load environment variables from .env file
// const app = express(); // Create an Express application instance
// // Middlewares
// app.use(express.json());
// Connections and Listeners
//2nd base
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
import { config } from 'dotenv'; // Import the dotenv package to load environment variables
config(); // Load environment variables from .env file
app.get("/", (req, res) => {
    res.send("Hello from the backend!");
});
app.post("/hello", (req, res, next) => {
    console.log(req.body.name); // Log the request body to the console
    // This is a route handler for POST requests to the "/hello" endpoint
    return res.send("Hello World!"); // Send a response with the text "Hello World!"
});
const PORT = process.env.PORT || 5000;
connectToDatabase().then(() => {
    app.listen(PORT, () => console.log(`Server Open & connected to database check on port ${PORT}`)); // Start the server on port 5000 and log a message
}).catch(err => console.log(err));
//3rd base
// Connections and Listeners
// import app from "./app.js";
// import { connectToDatabase, disconnectFromDatabase } from "./db/connection.js";
// import { config } from 'dotenv';
// config();
// const PORT = process.env.PORT || 5000;
// connectToDatabase().then(() => {
//     app.listen(PORT, () => console.log(`Server Open & connected to database check on port ${PORT}`));
// }).catch(err => console.log(err));
//# sourceMappingURL=index.js.map