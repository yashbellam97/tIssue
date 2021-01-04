const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./dbconfig");

connectDB()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/users", require("./routes/api/users"));
app.use("/api/projects", require("./routes/api/projects"));
app.use("/api/comments", require("./routes/api/comments"));
app.use("/api/issues", require("./routes/api/issues"));

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}...`));