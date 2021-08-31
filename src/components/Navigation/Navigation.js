import React from 'react';
import './Navigation.css'
import { NavLink } from 'react-router-dom';

function Navigation({navShow}) {
    return (
        <nav className="navigation">
            <NavLink exact to="/" className="navigation-point__to-main" activeClassName="navigation-point_active">Главная</NavLink>
            <NavLink to="/movies" className="navigation-point" activeClassName="navigation-point_active">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="navigation-point" activeClassName="navigation-point_active">Сохранённые фильмы</NavLink>
        </nav>
    )
}

export default Navigation;