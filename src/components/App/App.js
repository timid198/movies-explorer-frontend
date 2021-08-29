import React, {useEffect, useState} from 'react';
import '../App/App.css';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import useWindowDimensions from '../../utils/Resize';
import * as beatfilmMoviesApi from '../../utils/MoviesApi';
import * as clientApi from '../../utils/MainApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

import {headerColors} from '../../utils/constants';

function App() {

const { width } = useWindowDimensions()
const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
const [movies, setMovies] = useState([]);
const [loggedIn, setLoggedIn] = useState(false);
const [currentUser, setCurrentUser] = useState({name: CurrentUserContext.name, email: CurrentUserContext.email});
const [savedMovies, setSavedMovies] = useState([]);
const history = useHistory();

function handleBurgerMenuClick() {
  setIsBurgerMenuOpen(true);
}

function handleCloseClick() {
  setIsBurgerMenuOpen(false);
}

const getMovies = () => {
  beatfilmMoviesApi.getContentFromBeatFilmMovies()
  .then((res) => {
    console.log(res);
    setMovies(res)})
  .catch((err) => console.log(err))
}

const registerUser = ({name, email, password}) => {  
  clientApi.register(name, email, password)
  .then(res => console.log({'пришёл ответ регистрация': res}))
}

const loginUser = ({email, password}) => {
  clientApi.login(email, password)
  .then(res => {console.log({'пришёл ответ от входа': res});})
}

const logoutUser = () => {
  clientApi.logout()
  .then(res => {setLoggedIn(true);
    console.log({'пришёл ответ от логаута': res})})
}

const updateUser = ({ name, email }) => {
  console.log({ name, email });
  clientApi.editProfile(name,email)
  .then(res => {console.log({'пришёл ответ после обновления профиля': res});
  setCurrentUser({name: res.name, email: res.email});})
}

useEffect(() => {
  getMovies();
}, [])

useEffect(() => {
  Promise.all([clientApi.getProfileData(), clientApi.getContent()])
    .then(res => {
      const [profileData, moviesData] = res;
      setLoggedIn(true);
      setCurrentUser({name: profileData.name, email: profileData.email});
      setSavedMovies(moviesData);
      console.log(res)}) 
    .catch((err) => console.log(err))
}, [loggedIn])

console.log(currentUser.name)

return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="App"> 
      <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <ProtectedRoute path="/movies" component={Movies} cards={movies} width={width} handleButtonOpenClick={handleBurgerMenuClick} loggedIn={loggedIn} / >
            <ProtectedRoute path="/saved-movies" component={SavedMovies} cards={savedMovies} handleButtonOpenClick={handleBurgerMenuClick} loggedIn={loggedIn} / >
            <ProtectedRoute path="/profile" component={Profile} onUpdate={updateUser}  logout={logoutUser} title={currentUser.name} loggedIn={loggedIn} / >
            <Route>
                  {loggedIn ? <Redirect to="/movies" /> : <Redirect exact to="/" />}
              </Route>
            <Route path="/signin">
              <Login onUpdate={loginUser} />
            </Route>
            <Route path="/signup">
              <Register onUpdate={registerUser} />
            </Route>
      </Switch>

      <Popup handleButtonCloseClick={handleCloseClick} open={isBurgerMenuOpen} />
      <ErrorPopup open="" statusCode="404" text="Страница не найдена" />
    </div>
  </CurrentUserContext.Provider>
  );
};

export default App;
