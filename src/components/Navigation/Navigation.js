import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';

function Navigation({navShow, navToMain}) {
    console.log(navShow);
    return (
        <div className="navigation" style ={ { display: navShow } }>
            <Link to="/" className="navigation-point" style ={ { display: navToMain } }>Главная</Link>
            <Link to="/movies" className="navigation-point">Фильмы</Link>
            <Link to="/saved-movies" className="navigation-point" >Сохранённые фильмы</Link>
        </div>
    )
}

export default Navigation;