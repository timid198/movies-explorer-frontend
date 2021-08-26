import { baseUrl } from "./constants";

const checkResponse = (response) => response.ok ? response.json() : Promise.reject();

export const getContentFromBeatFilmMovies = () => {
    return fetch (`${baseUrl}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
    })
    .then(checkResponse);
}