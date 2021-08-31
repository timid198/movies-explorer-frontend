import { API_URL } from "./constants";

const checkResponse = (response) => response.ok ? response.json() : Promise.reject();

export const createMovie = (data) => {
    return fetch (`${API_URL}/movies`, {
        method: 'POST',
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
                image: `https://api.nomoreparties.co${data.image.url}`,
                trailer: `${data.trailerLink}`,
                thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
                movieId: `${data.id}`,
                nameRU: `${data.nameRU}`,
                nameEN: `${data.nameEN}`,
                
            })
    })
    .then(checkResponse);
};

export const deleteMovie = (_id) => {
    return fetch (`${API_URL}/movies/:${_id}`, {
        method: 'DELETE',
        credentials: 'include',        
    })
    .then(checkResponse);
};

export const register = (name, email, password) => {
    console.log('name :', name, 'email :', email, 'password :', password);
    return fetch (`${API_URL}/signup`, {
        method: 'POST',        
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify({name, email, password})
    })
    .then(checkResponse);
}

export const editProfile = (name, email) => {
    return fetch(`${API_URL}/users/me`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email})
    })

    .then(checkResponse)
}

export const login = (email, password) => {
    return fetch (`${API_URL}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })
    .then(checkResponse);
}

export const getProfileData = () => {
    return fetch(`${API_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
    })
    .then(checkResponse)
}

export const getContent = () => {
    return fetch (`${API_URL}/movies`, {
        method: 'GET',
        credentials: 'include',
    })
    .then(checkResponse);
}

export const logout = () => {
    return fetch (`${API_URL}/signout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'},
    })
    .then(res => res.send({ message: 'Вы произвели выход из аккаунта.' }));
}