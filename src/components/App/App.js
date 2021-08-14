import React from 'react';
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

import cards from '../../utils/cards';
import savedCards from '../../utils/saved-cards';

const headerColors = {"main": "#DDDEE3",
                      "default": "#FAFAFA",
                      "profile": "#FFFFFF"
                    };

function App() {
  return (
    <div className="App"> 
      <Switch>
        <Route exact path="/">
          <Header headerBackgrounColor={headerColors.main} profileShow="none" loginShow="block" registerShow="block" navShow="none" navToMain="none" />
          <Main />
          <Footer />
        </Route>        
        <Route path="/movies">
          <Header headerBackgrounColor={headerColors.default} profileShow="block, [@media (max-width:1279px)]: display: none" loginShow="none" registerShow="none" navShow="grid, [@media (max-width:1279px)]: display: none" navToMain="none, [@media (min-width:1279px)]: display: inline" />
          <Movies cards={cards} />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header headerBackgrounColor={headerColors.default} profileShow="block, [@media (max-width:1279px)]: display: none" loginShow="none" registerShow="none" navShow="grid, [@media (max-width:1279px)]: display: none" navToMain="none, [@media (min-width:1279px)]: display: inline" />
          <SavedMovies cards={savedCards} />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header headerBackgrounColor={headerColors.profile} profileShow="block, [@media (max-width:1279px)]: display: none" loginShow="none" registerShow="none" navShow="grid, [@media (max-width:1279px)]: display: none" navToMain="none, [@media (min-width:1279px)]: display: inline" />
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
