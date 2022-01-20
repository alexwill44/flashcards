import { Component } from 'react';
import FlashcardModel from '../models/flashcard';

class Create extends Component {
    state = {
        question: "",
        answer: "",
    };

    handleSubmit = event => {
        event.preventDefault();
        FlashcardModel.create(this.state).then(json => {
            this.props.history.push(`/${json.flashcards._id}`);
        });
    };

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render(){
        return (
            <div className = 'card_body create'>
                <form onSubmit={this.handleSubmit}>    
                    <span className ='question'>    
                        <p>Question: 
                            <textarea 
                                onChange={this.handleInput}
                                type='text'
                                rows={1}
                                columns={100}
                                name='question'
                                placeholder='???'
                            />        
                        </p>
                    </span>
                    <span className ='answer'>
                    <p> <label for="answer">   Answer: </label> 
                        <textarea 
                            onChange={this.handleInput}
                            type='text'
                            rows={1}
                            columns={100}
                            name='answer'
                            placeholder='********'
                        /></p>
                    </span> 
                    <input type='submit' value='Add Flashcard'/>
                </form>  
            </div>
        );
    };
}

export default Create;