import { baseUrl } from "./constants";

const checkResponse = (response) => response.ok ? response.json() : Promise.reject();

export const getContentFromBeatFilmMovies = () => {
    console.log();
    return fetch (`${baseUrl}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'},
    })
    .then(checkResponse);
}