import './Library.scss';
import Card from './Card';

function Gallery(props) {

    const allCards = flashcards => {
        return flashcards.map(flashcard => <Card {...flashcard} key={props.question + props.answer} />);
    };

    return(
        <div className='gallery'>
            <h3>Is this an array or an obj::{props.data.length}</h3>
            <div className='cards'> {allCards(props.data)} </div>
        </div>   
    );
};

export default Gallery;
