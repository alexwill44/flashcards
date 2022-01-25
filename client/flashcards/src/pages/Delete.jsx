import { Component } from 'react'; 
import FlashcardModel from '../models/flashcard';
import { Link } from 'react-router-dom'; 

class Delete extends Component {
    state = {
        flashcard: null, 
        showAnswer: false,
    };

    componentDidMount() {
        FlashcardModel.show(this.props.match.params.id).then(json => {
            this.setState({
                flashcard: json.flashcards,
            });
        });
    }

    handleAnswer = () => {
        if( this.state.showAnswer === false ) {
            this.setState({showAnswer:true});
            }
        if( this.state.showAnswer === true ) {
            this.setState({showAnswer:false});
             }
    };

    handleDelete = () => {
        FlashcardModel.delete(this.props._id).then(this.props.history.push('/'));
    };
    
    render() {
        const { flashcard } = this.state;
    
        const Answer = (flashcard) => {
            return (
                <div className ='answer'>
                    <p>Answer: {flashcard.answer} </p>
                </div>
            );
        }
        
        return (
            <div className = 'card_body'>
                {flashcard ? (
                <>       
                    
                    <h4>Would You like to delete this card? 
                        <button className='remove' onClick={this.handleDelete}> Delete </button>
                        <button className='back'> <Link to='/'> Back to Random </Link></button>
                    </h4>

                    <span className ='question'>    
                        <p>Question: {flashcard.question}</p> 
                    </span>
                    <button type='submit' value='Toggle Answer' onClick={this.handleAnswer}> Toggle Answer </button>
                    {this.state.showAnswer ? <Answer answer={flashcard.answer} /> : null }
                </>
                    ) : (
                        <h4>Fetching Card...</h4>
                    )}                
            </div>
        );
    };
}

export default Delete;