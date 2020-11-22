const mongoose = require("mongoose");

const BookSchema = mongose.Schema;
let book = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
    date: { type: Date, default: Date.now },
    image: {type: String},
    link: {type: String}

})
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;