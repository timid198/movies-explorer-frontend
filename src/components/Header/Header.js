import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({handleButtonOpenClick, headerBackgrounColor, profileShow, loginShow, registerShow, navShow, burgerMenuShow}) {
    return (
        <div className="header" style ={ { backgroundColor: headerBackgrounColor } }>
            
            <Link to="/" className="header-logo" />            
            <Navigation navShow={navShow} />

            <div className="header-auth">
                <Link to="/signup" className="header-auth__registration" style ={ { display: registerShow } } >Регистрация</Link>
                <Link to="/signin" className="header-auth__login" style ={ { display: loginShow } } >Войти</Link>                
            </div>
            <Link to="/profile" className="header-profile" style ={ { display: profileShow } } />
            <button type="button" className="header-burger" style ={ { display: burgerMenuShow } } onClick={handleButtonOpenClick} />            
        </div>        
    )
}

export default Header;