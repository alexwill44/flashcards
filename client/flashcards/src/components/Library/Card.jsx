import './Library.scss';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FlashcardModel from '../../models/flashcard';

function Card (props) {
    const navigate = useNavigate();
    const [showAnswer, setShowAnswer] = React.useState(false)
    const showHide = () => {
        if( showAnswer === true ) {
            setShowAnswer(false)
        }
        if( showAnswer === false ) {
            setShowAnswer(true)
        }
    }; 
    const handleDelete=()=> {
        FlashcardModel.delete(props._id).then(
            navigate('/', { replace: true}));
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

            <i className="fas fa-eraser delete" onClick={handleDelete}></i>
            
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