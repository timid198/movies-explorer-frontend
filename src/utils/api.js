import { baseUrl } from "./constants";

const checkResponse = (response) => response.ok ? response.json() : Promise.reject();

export const getContentFromBeatFilmMovies = () => {
    console.log();
    return fetch (`${baseUrl}/`, {
        method: 'GET',
        // credentials: 'include',
        headers: {
            'Content-Type': 'application/json'},
    })
    .then(checkResponse);
}