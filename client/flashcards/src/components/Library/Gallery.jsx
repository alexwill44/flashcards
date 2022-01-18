import './Library.scss';
import Card from './Card';

function Gallery(props) {

    const randomCard = flashcards => {

        return (<Card {...flashcards[Math.floor(Math.random()*flashcards.length)]} key={props.question + props.answer} />);
        
    };

    return(
        <div className='gallery'>
            <div className='cards'> {randomCard(props.data)} </div>
        </div>   
    );
};

export default Gallery;
