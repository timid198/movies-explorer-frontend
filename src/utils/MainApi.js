import { apiUrl } from "./constants";

const checkResponse = (response) => response.ok ? response.json() : Promise.reject();

export const createMovie = (data) => {
    return fetch (`${apiUrl}/movies`, {
        method: 'GET',
        credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country: `${data.country}`,
                director: `${data.director}`,
                duration: `${data.duration}`,
                year: `${data.year}`,
                description: `${data.description}`,
                image: `${data.image.url}`,
                trailer: `${data.trailerLink}`,
                thumbnail: `${data.image.formats.thumbnail}`,
                movieId: `${data.id}`,
                nameRU: `${data.nameRU}`,
                nameEN: `${data.nameEN}`,
                
            })
        })
        .then(checkResponse);
};

export const deleteMovie = (_id) => {
    return fetch (`${apiUrl}/movies/:movieId`, {
        method: 'DELETE',
            credentials: 'include',        
        })
        .then(checkResponse);
};