const express = require("express");
var cors = require("cors");
require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const connectDB = require("./dbconfig");

connectDB()

const app = express();
const PORT = process.env.PORT || 5000;

require("./passportconfig")(passport);

app.use(cors());
app.use(express.json());


// Express Session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

app.use(express.urlencoded({ extended: true }));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/projects", require("./routes/api/projects"));
app.use("/api/comments", require("./routes/api/comments"));
app.use("/api/issues", require("./routes/api/issues"));

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}...`));