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
const [currentUser, setCurrentUser] = useState({name: '', email: ''});
const [savedMovies, setSavedMovies] = useState([]);

function handleBurgerMenuClick() {
  setIsBurgerMenuOpen(true);
}

function handleCloseClick() {
  setIsBurgerMenuOpen(false);
}

const getMovies = () => {
  beatfilmMoviesApi.getContentFromBeatFilmMovies()
  .then((res) => {
    setMovies(res)})
  .catch((err) => console.log(err))
}

const registerUser = ({name, email, password}) => {  
  clientApi.register(name, email, password)
  .then(res => console.log({'пришёл ответ регистрация': res}))
}

const loginUser = ({email, password}) => {
  clientApi.login(email, password)
  .then(res => console.log({'пришёл ответ от входа': res}))
}

const logoutUser = () => {
  clientApi.logout()
  .then(res => {setLoggedIn(true);
    console.log({'пришёл ответ от логаута': res})})
}

const updateUser = ({ name, email }) => {
  clientApi.editProfile(name,email)
  .then(res => console.log({'пришёл ответ после обновления профиля': res}))
}

useEffect(() => {
  getMovies();
}, [])

useEffect(() => {
  Promise.all([clientApi.getProfileData(), clientApi.getContent()])
    .then(res => {
      const [profileData, moviesData] = res;
      setLoggedIn(true);
      setCurrentUser(profileData);
      setSavedMovies(moviesData);}) 
    .catch((err) => {setLoggedIn(true);
    console.log(err)})
}, [loggedIn])

return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="App"> 
      <Switch>
        <Route exact path="/">
          <Header 
          handleButtonOpenClick={handleBurgerMenuClick}
          headerBackgrounColor={headerColors.main} 
          profileShow="none" 
          loginShow="block" 
          registerShow="block" 
          navShow="none" 
          burgerMenuShow="none" />
          <Main />
          <Footer />
        </Route>        
        <Route path="/movies">
          <Header 
          handleButtonOpenClick={handleBurgerMenuClick}
          headerBackgrounColor={headerColors.default} 
          profileShow="block, [@media (max-width:1279px)]: display: none" 
          loginShow="none" 
          registerShow="none" 
          navShow="grid, [@media (max-width:1279px)]: display: none" />
          <Movies
           cards={movies}
           width={width}
           />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header 
          handleButtonOpenClick={handleBurgerMenuClick}
          headerBackgrounColor={headerColors.default} 
          profileShow="block, [@media (max-width:1279px)]: display: none" 
          loginShow="none" 
          registerShow="none" 
          navShow="grid, [@media (max-width:1279px)]: display: none" />
          <SavedMovies cards={savedMovies} />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header 
          handleButtonOpenClick={handleBurgerMenuClick}
          headerBackgrounColor={headerColors.profile} 
          profileShow="block, [@media (max-width:1279px)]: display: none" 
          loginShow="none" 
          registerShow="none" 
          navShow="grid, [@media (max-width:1279px)]: display: none" />
          <Profile onUpdate={updateUser} />
        </Route>
        <Route path="/signin">
          <Login onUpdate={loginUser} logout={logoutUser} />
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
