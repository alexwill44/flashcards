import Gallery from '../components/Library/Gallery';
import useFlashcards from '../hooks/useFlashcards';

function FlashcardsHook(props) {
    const [flashcards, fetchFlashcards] = useFlashcards();
    return (
        <div className = 'flashcards-container'>
            <h1>Flashcards</h1>
            <button onClick={fetchFlashcards}> Random Flashcard </button>

            <Gallery data={flashcards} />
        </div>
    );
}

export default FlashcardsHook;