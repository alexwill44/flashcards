import './Library.scss';
import React from 'react';

const Card = (props) => {
    const [showAnswer, setShowAnswer] = React.useState(false)
    const onCLick = () => {
        if( showAnswer === true ) {
            setShowAnswer(false)
        }
        if( showAnswer === false ) {
            setShowAnswer(true)
        }
    };

    return (
        <div className = 'card_body'>
            <span className ='question'>    
                <p>Question: {props.question}</p>
            </span>
            <input type='submit' value='Toggle Answer' onClick={onCLick} />
            {showAnswer ? <Answer answer={props.answer} /> : null }                
        </div>
    );
};

const Answer = (props) => {
    return (
        <div className ='answer'>
            <p>Answer: {props.answer} </p>
        </div>
    );
};

export default Card;