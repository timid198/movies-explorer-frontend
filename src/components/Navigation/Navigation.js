import React from 'react';
import './Navigation.css'
import { NavLink } from 'react-router-dom';

function Navigation({loggedIn, navShow}) {

    const navigationVisible = !loggedIn ? 'navigation_hidden' : 'navigation'

    return (
        <nav className={navigationVisible} style ={ { display: navShow } }>
            <NavLink exact to="/" className="navigation-point__to-main" activeClassName="navigation-point_active">Главная</NavLink>
            <NavLink to="/movies" className="navigation-point" activeClassName="navigation-point_active">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="navigation-point" activeClassName="navigation-point_active">Сохранённые фильмы</NavLink>
        </nav>
    )
}

export default Navigation;