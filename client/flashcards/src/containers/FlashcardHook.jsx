import Gallery from '../components/Library/Gallery';
import useFlashcards from '../hooks/useFlashcards';
import React from 'react';

function FlashcardsHook(props) {
    const [flashcards, fetchFlashcards] = useFlashcards();
    
    return (
        <div className = 'flashcards-container'>
            <h1 className='title'>Flashcards</h1>
            <button className="new_card" onClick={fetchFlashcards}> Random Flashcard </button>
            <Gallery data={flashcards} />
        </div>
    );
}

export default FlashcardsHook;