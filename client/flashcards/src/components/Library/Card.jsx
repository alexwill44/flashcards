import './Library.scss';
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FlashcardModel from '../../models/flashcard';

function Card (props) {
    const [showAnswer, setShowAnswer] = React.useState(false)
    const showHide = () => {
        if( showAnswer === true ) {
            setShowAnswer(false)
        }
        if( showAnswer === false ) {
            setShowAnswer(true)
        }
    }; 
    const handleDelete = () => {
        FlashcardModel.delete(props._id).then(
            '/', );
    };
    
    useEffect(
        function (nextProps) {
            if(props != nextProps){
                setShowAnswer(false);
            }
        },[props]
      );

    return (
        <div className = 'card_body'>
            <span className='editButtons'> 
                <Link to={`/${props._id}/update`}> <i className='fas fa-edit update'></i> </Link> 

                <Link to={`/${props._id}`}> <i className='fas fa-eraser delete'></i> </Link>
            </span>  
            
            <span className ='question'>    
                <p>Question: {props.question}</p>
            </span>
            <input type='submit' value='Toggle Answer' onClick={showHide} />
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