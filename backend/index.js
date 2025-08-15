import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./model/booksModel.js";
import booksRoute from "./routes/booksRoute.js";
const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling routes
app.use("/books", booksRoute);

app.get("/", (req, res) => {
    return res.status(234).send("Welcome to mern stack");
});


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listen ap port ${PORT}`);
        });
    }).catch((error) => {
        console.log(error);
    });