const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlashcardSchema = new Schema({
    question: String,
    answer: String,
});

const Flashcard = mongoose.model('Flashcard', FlashcardSchema);

module.exports = Flashcard; 