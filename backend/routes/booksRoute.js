import express from "express";
import Book from "../models/bookModel.js";

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishedYear) {
            return res.status(400).send({ message: "All fields are required" });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishedYear: req.body.publishedYear,
        }
        const book = await Book.create(newBook);
        res.status(201).send({ message: "Book created successfully", book });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json(
            {
                count: books.length,
                data: books,
            }
        );
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).send({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
});

router.put("/:id", async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishedYear) {
            return res.status(400).send({ message: "All fields are required" });
        }
        const id = req.params.id;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).send({ message: "Book not found" });
        }
        const updatedBook = await Book.findByIdAndUpdate(id, req.body);

        if (!updatedBook) {
            return res.status(404).send({ message: "Book not found" });
        }
        res.status(200).send({ message: "Book updated successfully", book: updatedBook });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deleteBook = await Book.findByIdAndDelete(id);
        if (!deleteBook) {
            return res.status(404).send({ message: "Book not found" });
        }
        return res.status(200).send({ message: "Book deleted successfully" });
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message });
    }
});

export default router;