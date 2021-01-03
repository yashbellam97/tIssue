const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./dbconfig");

connectDB()

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}...`));