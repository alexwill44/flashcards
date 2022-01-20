import { API_URL } from '../constants';
const url = API_URL + 'flashcards';

class FlashcardModel {
    // all flashcards
    static all() {
        return fetch(url).then(res => res.json());
    }

    static show(id) {
        return fetch(`${url}/${id}`).then(res => res.json());
    }

    static create(data) {
        return fetch(url, {
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json",
            },
        }).then(res => res.json());
    }
}

export default FlashcardModel;
