import './Library.scss';
import React from 'react';

const Card = (props) => {
    const [showAnswer, setShowAnswer] = React.useState(false)
    const onCLick = () => setShowAnswer(true)
        return (
            <div className = 'card_body'>
                <span className ='question'>    
                    <p>Question: {props.question}</p>
                </span>
                <input type='submit' value='Show Answer' onClick={onCLick} />
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