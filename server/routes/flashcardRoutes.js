//imports
const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/', ctrl.flashcards.index);
router.get('/:id', ctrl.flashcards.show);
router.post('/', ctrl.flashcards.create);
router.put('/:id', ctrl.flashcards.update);
router.delete('/:id', ctrl.flashcards.destroy);

//exports
module.exports = router;