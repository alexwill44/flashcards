const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/flashcards"; 

const configOptions = { 
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false,
}; 

mongoose
    .connect(connectionString, configOptions)
    .then(() => console.log("MongoDB successfully connected..."))
    .catch(err => console.log(`MongoDB... morelike Mon-NO-DB connection error: ${err}`));

module.exports = {
    Flashcard: require("./Flashcard"),
};