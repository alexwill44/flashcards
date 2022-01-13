const db = require('../models');

const index = (req, res) => {
    db.Flashcard.find({}, (err, foundFlashcards) => {
        if(err) {
            console.log('Error in flashcard INDEX:', err); 
            return res.send("Incomplete flashcard INDEXcontroller function... how bout dat!");
        }

        res.json({
            status: 200,
            message: 'All FCards Returned',
            flashcards: foundFlashcards,
            total: foundFlashcards.length,
            requestedAt: new Date(),
        });
    });
};

module.exports = {
    index,
};