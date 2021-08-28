import { BASE_URL } from "./constants";

const checkResponse = (response) => response.ok ? response.json() : Promise.reject();

export const getContentFromBeatFilmMovies = () => {
    return fetch (`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
    })
    .then(checkResponse);
}