const express = require("express");
const connectDB = require("./config/database");
const employeeRouter = require("./routes/employeeRoutes");
const userRouter = require("./routes/userRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();

// Connect MongoDB
connectDB();


// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


// Middleware
app.use(cookieParser());
app.use(express.json());


// Dashboard API
app.use("/api/dashboard", dashboardRoutes);


// Employee APIs
app.use("/api/v1", employeeRouter);


// User APIs
app.use("/api/v2", userRouter);


// Test route
app.get("/", (req, res) => {
  res.send("The server is working fine");
});


// Start server
app.listen(process.env.port, () => {
  console.log(`This server is running on port ${process.env.port}`);
});