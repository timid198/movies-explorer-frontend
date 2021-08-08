import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="navigation">
            <Link to="/" className="navigation-point navigation-point_hidden" >Главная</Link>
            <Link to="/movies" className="navigation-point" >Фильмы</Link>
            <Link to="/saved-movies" className="navigation-point" >Сохранённые фильмы</Link>
        </div>
    )
}

export default Navigation;