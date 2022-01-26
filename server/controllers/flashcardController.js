const db = require('../models');

const index = (req, res) => {
    db.Flashcard.find({}, (err, foundFC) => {
        if(err) {
            console.log('Error in flashcard INDEX:', err); 
            return res.send("Incomplete flashcard INDEXcontroller function... how bout dat!");
        }

        res.json({
            status: 200,
            message: 'All FCards Returned',
            flashcards: foundFC,
            total: foundFC.length,
            requestedAt: new Date(),
        });
    });
};

const show = (req, res) => {
    db.Flashcard.findById(req.params.id, (err, foundFC) => {
        if(err){
            console.log('Error in flashcard SHOW:', err); 
            return res.send("Incomplete flashcard SHOWcontroller function... how bout dat");
        }
        res.json({
            status: 201,
            message: `Found the FC with _id ${foundFC.id}`,
            flashcards: foundFC,
            requestedAt: new Date(),
        });
    });
}

const create = (req, res) => {
    db.Flashcard.create(req.body, (err, savedFC) => {
        if(err){
            console.log('Error in flashcard CREATE:', err); 
            return res.send("Incomplete flashcard CREATEcontroller function... how bout dat");
        }
        res.json({
            status: 201,
            message: "FC created successfully",
            flashcards: savedFC,
            requestedAt: new Date(),     
        });
    });
};

const update = (req, res) => {
    db.Flashcard.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true },
        (err, updatedFC) => {
            if(err){
                console.log('Error in flashcard UPDATE:', err); 
                return res.send("Incomplete flashcard UPDATEcontroller function... how bout dat");
            }
        res.json({
            status: 200,
            message: `FC with _id ${updatedFC.id} was successfully updated`,
            flashcards: updatedFC,
            requestedAt: new Date(),
        });
    });
};

const destroy = (req, res) => {
    db.Flashcard.findByIdAndDelete(req.params.id, (err, deletedFC) => {
        if(err){
            console.log('Error in flashcard DESTROY:', err); 
            return res.send("Incomplete flashcard DESTROYcontroller function... how bout dat");
        }
        res.json({
            status: 200,
            message: `Successfully deleted FC with _id ${deletedFC.id}`,
            flashcards: deletedFC,
            requestedAt: new Date(),
        });
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};