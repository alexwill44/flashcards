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
            this.props.history.push(`/${json.Flashcard}`);
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
                            <input 
                                onChange={this.handleInput}
                                type='text'
                                name='question'
                                placeholder='???'
                            />        
                        </p>
                    </span>
                    <span className ='answer'>
                    <p>Answer:
                        <input 
                            onChange={this.handleInput}
                            type='text'
                            name='answer'
                            placeholder='********'
                        />
                    </p>
                    </span> 
                    <input type='submit' value='Add Flashcard'/>
                </form>  
            </div>
        );
    };
}

export default Create;