import './Library.scss';

function Card(props) {

    return (
        <div className = 'card_body'>
            <span className = 'question'>    
                <p>Question: {props.question}</p>
            </span>
            <span className = 'answer'>
                <p>Answer: {props.answer}</p>
            </span>
        </div>
    );
}

export default Card;