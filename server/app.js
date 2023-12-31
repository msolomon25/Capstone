// 'Import' the Express module instead of http
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
// Initialize the Express application
const app = express();

//Mongoose library
// mongoose.connect(process.env.MONGODB, {
//   // Configuration options to remove deprecation warnings, just include them to remove clutter
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "Connection Error:"));
// db.once(
//   "open",
//   console.log.bind(console, "Successfully opened connection to Mongo!")
// );

//logging middleware
const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`
  );
  next();
};

const PORT = process.env.PORT || 4040;

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  response.status(200).json({ message: "Service healthy" });
});

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(4040, () => console.log("Listening on port 4040"));
