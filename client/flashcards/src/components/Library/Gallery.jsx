import './Library.scss';
import Card from './Card';
import React from'react';

function Gallery(props) {

    const randomCard = flashcards => {
        const flashcard = flashcards[Math.floor(Math.random()*flashcards.length)];
        
        return (
        <Card {...flashcard} key={props.question + props.answer} showAnswer={false}/>);
        
    };

    return(
        <div className='gallery'>
            <div className='cards'> {randomCard(props.data)} </div>
        </div>   
    );
};

export default Gallery;
