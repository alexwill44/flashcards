import { Component } from 'react';
import Gallery from '../components/Library/Gallery';
import FlashcardModel from '../models/flashcard';

class Flashcards extends Component {
    state = {
        flashcards: [],
    };

    componentDidMount() {
        FlashcardModel.all().then(json => {
            this.setState({ 
                flashcards: json.flashcards,
            });
        });
    }

    render() {
        return (
            <div className='flashcards-container'>
                <h1>Maybe this worked Behold!</h1>
                <Gallery data={this.state.flashcards} /> 
            </div>
        );   
    }
}

export default Flashcards;