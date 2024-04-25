// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const authRoute = require("./routes/auth");
// const dotenv = require("dotenv");

// dotenv.config();

// mongoose.connect(process.env.MONGO_URL, {

// }).then(() => console.log("DB connection successful")).catch((err) => {
//     console.log(err);
// })

// app.use("/api/auth", authRoute);
// app.listen(8800, () => {
//     console.log("Backend server is running");
// }); 


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require("morgan");
require('dotenv').config();
const authRoute = require("./routes/auth");


async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB connected successfully');
    } catch (err) {
        console.log(err);
    }
}

async function startServer() {
    try {
        await connectToDb();
        app.use(morgan("combined"));
        app.use(express.json());
        app.use("/api/auth", authRoute);

        app.listen(8800, () => {
            console.log('Server started on port 8800');
        });
    } catch (err) {
        console.log(err);
    }
}

startServer();