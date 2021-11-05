import { API_URL } from "./constants";

export async function createMovie(data) {
    const res = await fetch (`${API_URL}/movies`, {
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
        if (res.status === 200) {
            return res.json();
        }else{
            return Promise.reject();
        }
};

export  async function deleteMovie(_id){
    const response = await fetch (`${API_URL}/movies/${_id}`, {
    method: 'DELETE',
    credentials: 'include',        
    });
        if (response.status === 200) {
            const newMoviesList = await fetch (`${API_URL}/movies`, {
              method: 'GET',
              credentials: 'include',
          });
          if (newMoviesList.status === 200) {
              return newMoviesList.json();
          }
          return;
        }else{
            return Promise.reject();
        }
};

export async function register(name, email, password) {
    const res = await fetch (`${API_URL}/signup`, {
        method: 'POST', 
        credentials: 'include',       
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify({name, email, password})
    })
        if (res.status ===200) {
            const login = await fetch (`${API_URL}/signin`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            })
                if (login.status === 200) {
                    return login.json();                  
            } 
            return;
        }else{
            return Promise.reject();
        }
}

export async function editProfile(name, email) {
    const res = await fetch(`${API_URL}/users/me`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email})
    })
        if (res.status === 200) {
            return res.json();
        }else{
            return Promise.reject();
        }
}

export async function login(email, password) {
    const res = await fetch (`${API_URL}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })
        if (res.status === 200) {
            return res.json();
        }else{
            return Promise.reject();
        }
}

export async function getProfileData() {
    const res = await fetch(`${API_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
    })
        if (res.status === 200) {
            return res.json();
        }else{
            return Promise.reject();
        }
}

export async function getContent() {
    const res = await fetch (`${API_URL}/movies`, {
        method: 'GET',
        credentials: 'include',
    })
        if (res.status === 200) {
            return res.json();
        }else{
            return Promise.reject();
        }
}

export async function logout() {
    const res = await fetch (`${API_URL}/signout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'},
    })
        if (res.redirected) {
            return res;
        }else{
            return Promise.reject();
        }
}