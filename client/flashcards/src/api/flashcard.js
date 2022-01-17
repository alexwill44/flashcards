const url = 'http:localhost:4144/api/v1/flashcards';

export const all = () => {
    return fetch(url).then(responce => responce.json());
};

export const show = id => {
    return fetch(`${url}/${id}`).then(responce => responce.json());
};