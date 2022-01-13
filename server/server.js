// imports
const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const port = proces.env.PORT || 4000; 
const app = express();

//middleware 
//- CORS for sharing on the same machine
app.use(cors());
//- JSON parsing
app.use(express.json());
//-API routes
app.use("/api/v1/flashcards");

//listen
app.listen(port, ()=> console.log(`Server is live on port ${port}`));
