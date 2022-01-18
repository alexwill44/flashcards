// imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes')
const app = express();
const port = process.env.PORT||4000; 

//middleware 
//- CORS for sharing on the same machine
app.use(cors());
//- JSON parsing
app.use(express.json());
//-API routes
/// home
/* app.use("/api/v1/", (req, res) => {
    res.json({
        status: 200, 
        message: `there's no place like home`,
        requestedAt: new Date(),
    });
}); */
/// flashcards 
app.use("/api/v1/flashcards", routes.flashcards);

//listen
app.listen(port, ()=> console.log(`Server is live on port ${port}`));
