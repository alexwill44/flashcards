//imports
const router = require("express").Router();
const ctrl = require("../controllers");

//routes
router.get("/", ctrl.flashcards.index);

//exports
module.exports = router;