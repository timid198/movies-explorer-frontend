import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({handleButtonOpenClick, headerBackgrounColor, navShow, loggedIn}) {
    
    const unLoggedMenu = !loggedIn ?'header-auth' : 'header-auth_hidden'
    const profileLogged = !loggedIn ? 'header-profile_hidden' : 'header-profile'
    const burgerMenuShow = !loggedIn ? 'header-burger_hidden' : 'header-burger'

    return (
        <div className="header" style ={ { backgroundColor: headerBackgrounColor } }>
            
            <Link to="/" className="header-logo" />
            <Navigation loggedIn={loggedIn} navShow={navShow} />
            <Link to="/profile" className={profileLogged} />
            
            <div className={unLoggedMenu}>
                    <Link to="/signup" className="header-auth__registration" >Регистрация</Link>
                    <Link to="/signin" className="header-auth__login" >Войти</Link>                
            </div>            
             
            <button type="button" className={burgerMenuShow} onClick={handleButtonOpenClick} />            
        </div>        
    )
}

export default Header;