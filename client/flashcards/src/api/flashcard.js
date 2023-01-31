import { API_URL } from "../constants";
const url = API_URL + 'flashcards';

export const all = () => {
    return fetch(url).then(response => response.json());
};

export const show = id => {
    return fetch(`${url}/${id}`).then(response => response.json());
};

export const create = data => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:  {
            "Content-Type": "application/json",
        },
    }).then(response => response.json());
};

