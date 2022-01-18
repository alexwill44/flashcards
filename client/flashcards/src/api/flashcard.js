import { API_URL } from "../constants";
const url = API_URL + 'flashcards';

export const all = () => {
    return fetch(url).then(responce => responce.json());
};

export const show = id => {
    return fetch(`${url}/${id}`).then(responce => responce.json());
};