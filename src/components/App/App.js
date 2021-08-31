import React, {useEffect, useState} from 'react';
import '../App/App.css';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
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

const { width } = useWindowDimensions()
const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
const [movies, setMovies] = useState([]);
const [loggedIn, setLoggedIn] = useState(false);
const [currentUser, setCurrentUser] = useState({name: CurrentUserContext.name, email: CurrentUserContext.email, _id: CurrentUserContext._id});
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
  .then(res => {console.log({'пришёл ответ от входа': res});
                history.push('/movies');
                setLoggedIn(true);})
}

const logoutUser = () => {
  console.log('Click');
  clientApi.logout()
  .then(res => {setLoggedIn(false);
                history.push('/');
    console.log({'пришёл ответ от логаута': res})})
}

const updateUser = ({ name, email }) => {
  console.log({ name, email });
  clientApi.editProfile(name,email)
  .then(res => {console.log({'пришёл ответ после обновления профиля': res});
  setCurrentUser({name: res.name, email: res.email});})
}

const movieLike = (props) => {
  console.log(props)
  if (props.owner !== currentUser._id){  
  clientApi.createMovie(props)
  .then(res => console.log('Фильм добавлен в сохранённые', res))
  .catch(err => console.log(err))
}else{
  props.added=true;
  clientApi.deleteMovie(props._id)
  .then(res => console.log('Фильм удалён из сохранённых', res))
  .catch(err => console.log(err))
}
}

useEffect(() => {
  getMovies();
}, [])

useEffect(() => {
  Promise.all([clientApi.getProfileData(), clientApi.getContent()])
    .then(res => {
      const [profileData, moviesData] = res;
      setLoggedIn(true);
      setCurrentUser({name: profileData.name, email: profileData.email, _id: profileData._id});
      setSavedMovies(moviesData);
      console.log(res)}) 
    .catch((err) => console.log(err))
}, [loggedIn])

// console.log(currentUser._id)

return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="App"> 
      <Switch>
            <Route exact path="/">
              <Main handleButtonOpenClick={handleBurgerMenuClick} headerBackgrounColor={headerColors.main} loggedIn={loggedIn} />
            </Route>
            <ProtectedRoute path="/movies" component={Movies} page={"movies"} likeFunc={movieLike} userId={currentUser._id} cards={movies} saved={savedMovies} width={width} handleButtonOpenClick={handleBurgerMenuClick} headerBackgrounColor={headerColors.default} loggedIn={loggedIn} / >
            <ProtectedRoute path="/saved-movies" component={SavedMovies} page={"saved-movies"} cards={[]} saved={savedMovies} handleButtonOpenClick={handleBurgerMenuClick} headerBackgrounColor={headerColors.default} loggedIn={loggedIn} / >
            <ProtectedRoute path="/profile" component={Profile} onUpdate={updateUser}  logout={logoutUser} title={currentUser.name} handleButtonOpenClick={handleBurgerMenuClick} headerBackgrounColor={headerColors.profile} loggedIn={loggedIn} / >
            <Route path="/signin">
              <Login onUpdate={loginUser} />
            </Route>
            <Route path="/signup">
              <Register onUpdate={registerUser} />
            </Route>
            <Route>
              {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" />}
            </Route>
      </Switch>

      <Popup handleButtonCloseClick={handleCloseClick} open={isBurgerMenuOpen} />
      <ErrorPopup open="" statusCode="404" text="Страница не найдена" />
    </div>
  </CurrentUserContext.Provider>
  );
};

export default App;
