const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/flashcards"; 

mongoose
    .connect(connectionString)
    .then(() => console.log("MongoDB successfully connected..."))
    .catch(err => console.log(`MongoDB... more like Mon-NO-DB => connection error: ${err}`));

module.exports = {
    Flashcard: require("./Flashcard"),
};