import React, {useCallback, useEffect, useState} from 'react';
import '../App/App.css';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Popup from '../Popup/Popup';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import useWindowDimensions from '../../utils/Resize';
import * as beatfilmMoviesApi from '../../utils/MoviesApi';
import * as clientApi from '../../utils/MainApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

import {headerColors} from '../../utils/constants';

function App() {

const location = useLocation();
const { width } = useWindowDimensions()
const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
const [movies, setMovies] = useState([]);
const [loggedIn, setLoggedIn] = useState(false);
const [currentUser, setCurrentUser] = useState({name: CurrentUserContext.name, email: CurrentUserContext.email, _id: CurrentUserContext._id});
const [savedMovies, setSavedMovies] = useState([]);
const [loading, setLoading] = useState(false);
const [openErrorPopup, setOpenErrorPopup] = useState(false);
const [errorContent, setErrorContent] = useState({satusCode: '', statusMessage: ''});
const [updateMessage, setUpdateMessage] = useState('');
const history = useHistory();

function handleBurgerMenuClick() {
  setIsBurgerMenuOpen(true);
}

function handleCloseClick() {
  setIsBurgerMenuOpen(false);
}

function closeOverlay(evt){
  if(evt.target === evt.currentTarget){
    setIsBurgerMenuOpen(false);
  }
}

useEffect(() => {
  const handleEsc = (event) => {
      if (event.key === 'Escape') 
      setIsBurgerMenuOpen(false);
  };
  window.addEventListener('keydown', handleEsc);

  return () => {
      window.removeEventListener('keydown', handleEsc);
  };
}, []);

function handleErrorPopup() {
  setOpenErrorPopup(false);
  setErrorContent({satusCode: '', statusMessage: ''});
}

function handleError(el) {
  if (el.status && el.statusText) {
  setOpenErrorPopup(true);
  setErrorContent({satusCode: el.status, statusMessage: el.statusText});
  }
}

const getMovies = () => {
  beatfilmMoviesApi.getContentFromBeatFilmMovies()
  .then((res) => {
    setMovies(res)})
  .catch((err) => handleError(err))
  .finally(() => setLoading(false))
}

const registerUser = ({name, email, password}) => { 
  setLoading(true);
  clientApi.register(name, email, password)
  .then(res => {
    clientApi.login(email, password)
    .then((res) => {setLoggedIn(true);
              history.push('/movies');})
    console.log('Вы успешно зарегистрировались и авторизовались.')})
  .catch((err) => handleError(err))
  .finally(() => setLoading(false))
}

const loginUser = ({email, password}) => {
  setLoading(true);
  clientApi.login(email, password)
  .then(res => {setLoggedIn(true);
                history.push('/movies');})
  .catch((err) => console.log(err))
  .finally(() => setLoading(false))
}

const logoutUser = () => {
  setLoading(true);
  clientApi.logout()
  .then((res) => {setLoggedIn(false);
                history.push('/');})
  .catch((err) => handleError(err))
  .finally(() => setLoading(false))
}

const updateUser = ({ name, email }) => {
  setLoading(true);
  clientApi.editProfile(name,email)
  .then(res => {console.log(res);
  setUpdateMessage(res.message);
  setCurrentUser({name: res.name, email: res.email});})
  .catch((err) => handleError(err))
  .finally(() => setLoading(false))
}

const nameEnChecker = (el) => {
  if (el.nameEN === '') {
    return {...el, nameEN: 'none'}
  }
  return el;
}

const movieLike = (props, link) => {
  setLoading(true);
  if (link === 'movies') {
  if (!savedMovies.find((el) => el.movieId === props.id)){ 
    let requestData = nameEnChecker(props);
  clientApi.createMovie(requestData)
  .then(res => {setSavedMovies([...savedMovies, res]);
    console.log('Фильм добавлен в сохранённые.')})
  .catch(err => handleError(err))
  .finally(() => setLoading(false))
}else{
  let deletedMovie = savedMovies.find((movie) => movie.movieId === props.id);
   if (deletedMovie) {
  clientApi.deleteMovie(deletedMovie._id)
  .then(res => {
    setSavedMovies(res);
    console.log('Фильм удалён из сохранённых.')})
  .catch(err => handleError(err))
  .finally(() => setLoading(false))
}}} if (link === 'saved-movies') {
  savedMovies.splice(savedMovies.indexOf(props, 0), 1);
  clientApi.deleteMovie(props._id)
  .then(res => {
    setSavedMovies(res);
    console.log('Фильм удалён из сохранённых.')})
  .catch(err => handleError(err))
  .finally(() => setLoading(false))
}};

const checkToken = useCallback(() => {
  clientApi.getProfileData()
  .then((res) => {
      setCurrentUser({name: res.name, email: res.email, _id: res._id});
      setLoggedIn(true);
      if (location.pathname === '/signin' || location.pathname === '/signup') {
        history.push('/movies');
      } else {
        history.push(location.pathname);
      }
  })
  .catch((err) => handleError(err))
}, [history]);
  
useEffect(() => {
  checkToken();
}, [checkToken, history])


useEffect(() => {
  getMovies();
}, []);

useEffect(() => {
  setUpdateMessage('');
}, [location.pathname]);

useEffect(() => {
  Promise.all([clientApi.getProfileData(), clientApi.getContent()])
    .then(res => {
      const [profileData, moviesData] = res;
      setSavedMovies(moviesData)      
      setCurrentUser({name: profileData.name, email: profileData.email, _id: profileData._id});
      setLoggedIn(true);}) 
    .catch((err) => handleError(err))
}, [loggedIn])

return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="App"> 
      <Switch>
            <Route exact path="/">
              <Main
               handleButtonOpenClick={handleBurgerMenuClick}
               headerBackgrounColor={headerColors.main}
               navShow="grid; [@media (max-width:1279px)]: display: none"
               loggedIn={loggedIn}
               isLoading={loading}
                />
            </Route>
            <ProtectedRoute
             path="/movies"
             component={Movies}
             page={"movies"}
             likeFunc={movieLike}
             userId={currentUser._id}
             cards={movies}
             saved={savedMovies}
             width={width}
             handleButtonOpenClick={handleBurgerMenuClick}
             headerBackgrounColor={headerColors.default}
             navShow="grid; [@media (max-width:1279px)]: display: none"
             loggedIn={loggedIn}
             isLoading={loading}
              / >
            <ProtectedRoute
             path="/saved-movies"
             component={SavedMovies}
             page={"saved-movies"}
             likeFunc={movieLike}
             userId={currentUser._id}
             cards={[]}
             saved={savedMovies}
             handleButtonOpenClick={handleBurgerMenuClick}
             headerBackgrounColor={headerColors.default}
             navShow="grid; [@media (max-width:1279px)]: display: none"
             loggedIn={loggedIn}
              / >
            <ProtectedRoute
             path="/profile"
             component={Profile}
             onUpdate={updateUser}
             logout={logoutUser}
             title={currentUser.name}
             handleButtonOpenClick={handleBurgerMenuClick}
             headerBackgrounColor={headerColors.profile}
             navShow="grid; [@media (max-width:1279px)]: display: none"
             loggedIn={loggedIn}
             isLoading={loading}
             updateMessage={updateMessage}
              / >
            <Route path="/signin">
              <Login
               onUpdate={loginUser}
               isLoading={loading}
                />
            </Route>
            <Route path="/signup">
              <Register
               onUpdate={registerUser}
               isLoading={loading}
                />
            </Route>
            <Route>
              {!loggedIn ? <Redirect to="/" /> : ''}
            </Route>
      </Switch>

      <Popup
       handleButtonCloseClick={handleCloseClick}
       closeOverlay={closeOverlay}
       open={isBurgerMenuOpen}
       loggedIn={loggedIn}
        />

      <ErrorPopup open={openErrorPopup} updater={handleErrorPopup} statusCode={errorContent.satusCode} text={errorContent.statusMessage} />
    </div>
  </CurrentUserContext.Provider>
  );
};

export default App;
