const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require("morgan");
require('dotenv').config();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");



async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected successfully");
    } catch (err) {
        console.log(err);
    }
}

async function startServer() {
    try {
        await connectToDb();
        app.use(morgan("dev"));
        app.use(express.json());
        app.use("/api/auth", authRoute);
        app.use("/api/users", userRoute);
        app.use("/api/movies", movieRoute);
        app.use("/api/lists", listRoute);

        app.listen(8800, () => {
            console.log("Server started on port 8800");
        });
    } catch (err) {
        console.log(err);
    }
}

startServer();