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
                <Gallery data={this.state.flashcards} /> 
            </div>
        );   
    }
}

export default Flashcards;