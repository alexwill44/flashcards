import { useState, useEffect } from 'react';
import FlashcardModel from '../models/flashcard';

export default function useFlashcards(id) {
    const [flashcards, setFlashcards] = useState([]);
    
    useEffect(
        function () {
            fetchFlashcards();
        },
        [id]
    );

    const fetchFlashcards = () => {
        if (id) {
            FlashcardModel.show(id).then(json => {
                setFlashcards(json.flashcard);
            });
        }
        else {
            FlashcardModel.all().then(json => {
                setFlashcards(json.flashcards);
            });
        }
    };
    
    return [ flashcards, fetchFlashcards];
}
