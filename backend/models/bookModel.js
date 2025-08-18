import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publishedYear: {
            type: Date,
            required: true
        },

    },
    {
        timeStamps: true,
    }
);

export const Book = mongoose.model(
    "Book", bookSchema
);

export default Book;
