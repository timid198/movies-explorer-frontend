import React, {useState} from 'react';
import '../App/App.css';
import { Route, Switch } from 'react-router-dom';
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
import * as api from '../../utils/api';

import cards from '../../utils/cards';
import savedCards from '../../utils/saved-cards';
import {headerColors} from '../../utils/constants';

function App() {

const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

function handleBurgerMenuClick() {
  setIsBurgerMenuOpen(true);
}

function handleCloseClick() {
  setIsBurgerMenuOpen(false);
}

const [movies, setMovies] = useState([]);

function getMovies(props) {
  api.getContentFromBeatFilmMovies(props.movies)
  .then((res) => {
    console.log(res);
    setMovies(res)})
  .catch((err) => console.log(err))
}

  return (
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
           onRecieveMovies={getMovies}
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
          <SavedMovies cards={savedCards} />
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
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
      </Switch>

      <Popup handleButtonCloseClick={handleCloseClick} open={isBurgerMenuOpen} />
      <ErrorPopup open="" statusCode="404" text="Страница не найдена" />
    </div>
  );
}

export default App;
