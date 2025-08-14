import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String, required: true,
        },
        author: {
            type: String, required: true,
        },
        publisheYear: {
            type: String, required: true,
        },
    },
    {
        timeStamps: true,
    }
)

const book = mongoose.model('book', {});