import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./model/booksModel.js";

const app = express();

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("Welcome to mern stack");
});


app.post("/books", async (req, res) => {
    try {
        if (req.body.title || req.body.author || req.body.publisher) {
            return response.status(400).send({ message: "Please provide all the fields" });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.title,
            publisher: req.body.title,
        };

        const book = await Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
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