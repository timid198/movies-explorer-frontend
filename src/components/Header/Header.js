import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <div className="header">
            
            <div className="header-navigation">
                <Link to="/" className="header-logo" />
                <Navigation />
            </div>            

            <div className="header-auth">
                <Link to="/signup" className="header-auth__registration" >Регистрация</Link>
                <Link to="/signin" className="header-auth__login" >Войти</Link>
                <Link to="/profile" className="header-profile" />
            </div>
        </div>
    )
}

export default Header;