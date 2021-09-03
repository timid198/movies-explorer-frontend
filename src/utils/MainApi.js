import { API_URL } from "./constants";

export async function createMovie(data) {
    let res = await fetch (`${API_URL}/movies`, {
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
     try {
        if (res.status === 200) {
            return res.json();
        }
    } catch (error) {
        console.log(error);
    }
};

export  async function deleteMovie(_id){
   let response = await fetch (`${API_URL}/movies/${_id}`, {
    method: 'DELETE',
    credentials: 'include',        
});
     try {
        if (response.status === 200) {
            let newMoviesList = await fetch (`${API_URL}/movies`, {
              method: 'GET',
              credentials: 'include',
          });
          if (newMoviesList.status === 200) {
              return newMoviesList.json();
          }
          return;
          } 
    } catch (error) {
        console.log(error);
    }
};

export async function register(name, email, password) {
    let res = await fetch (`${API_URL}/signup`, {
        method: 'POST', 
        credentials: 'include',       
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify({name, email, password})
    })
    
     try {
        if (res.status ===200) {
            return res.json();
        }
    } catch (error) {
        console.log(error);
    }
}

export async function editProfile(name, email) {
    let res = await fetch(`${API_URL}/users/me`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email})
    })
    
     try {
        if (res.status === 200) {
            return res.json();
        }
    } catch (error) {
        console.log(error);
    }
}

export async function login(email, password) {
    let res = await fetch (`${API_URL}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })
     try {
        if (res.status === 200) {
            return res.json();
        }  
    } catch (error) {
        console.log(error);
    }
}

export async function getProfileData() {
    let res = await fetch(`${API_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
    })
    try {
        if (res.status === 200) {
            return res.json();
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getContent() {
    let res = await fetch (`${API_URL}/movies`, {
        method: 'GET',
        credentials: 'include',
    })
    try {
        if (res.status === 200) {
            return res.json();
        }
    } catch (error) {
        console.log(error);
    }
}

export async function logout() {
    let res = await fetch (`${API_URL}/signout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'},
    })
    try {
        if (res.status === 200) {
            res.send({message: 'Вы произвели выход из аккаунта.'})
        }
    } catch (error) {
        console.log(error);
    }
}