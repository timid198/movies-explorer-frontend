import '../App/App.css';
import { Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Main />
      </Route>
      
      <Route path="/movies">
        <Movies />
      </Route>

      <Route path="/saved-movies">
        <SavedMovies />
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>

      <Route path="/signin">
        <Login />
      </Route>

      <Route path="/signup">
        <Register />
      </Route>
    </div>
  );
}

export default App;
