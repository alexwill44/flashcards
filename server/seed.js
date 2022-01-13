const db = require('./models');
const data = require('./flashcardData.json');

// delete 
db.Flashcard.deleteMany({}, (err, result) => {
    if(err) {
        console.log(err);
        process.exit();
    }
    console.log(result.deletedCount, 'flashcards deleted');
    
    //create
    db.Flashcard.create(data.flashcards, (err, seededFlashcards) => {
        if(err) {
            console.log(err);
            process.exit();
        }
        console.log(seededFlashcards, 'flashcards created successfully');
        console.log('done... well how bout dat!')
        process.exit();
    });
});