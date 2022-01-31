import { useState, useEffect } from 'react';
import FlashcardModel from '../models/flashcard';

function Update({match: { params }, history }) {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    useEffect(
        function(){
            FlashcardModel.show(params.id).then(({ flashcards }) => {
                setQuestion(flashcards.question);
                setAnswer(flashcards.answer);
            }); 
        }, 
        [params.id]
    );

    const handleSubmit = event => {
        event.preventDefault();
        FlashcardModel.update(params.id, {
            question,
            answer,
        }).then(json => {
            history.push(`/${params.id}`);
        });
    };
    
    return (
        <div className = 'card_body'>
        <form
            onSubmit={handleSubmit}
        >   
            <input type='submit' value='Update Flashcard' />    
            <span className ='question'>    
                <p>Question: 
                    <input 
                        type='text'
                        name='question'
                        value={question}
                        onChange={event => setQuestion(event.target.value)}
                     />
                </p> 
            </span>
                <span className ='answer'>
                    <p>Answer: 
                        <input 
                            type='text'
                            name='answer'
                            value={answer}
                            onChange={event => setAnswer(event.target.value)}
                        />
                    </p>
                </span>
        </form>           
    </div>    
    );
}



export default Update;