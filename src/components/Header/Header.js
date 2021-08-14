import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({headerBackgrounColor, profileShow, loginShow, registerShow, navShow, navToMain}) {
    // console.log(headerNavigationShow);
    return (
        <div className="header" style ={ { backgroundColor: headerBackgrounColor } }>
            
            <Link to="/" className="header-logo" />            
            <Navigation navShow={navShow} navToMain={navToMain}  />

            <div className="header-auth">
                <Link to="/signup" className="header-auth__registration" style ={ { display: registerShow } } >Регистрация</Link>
                <Link to="/signin" className="header-auth__login" style ={ { display: loginShow } } >Войти</Link>                
            </div>
            <Link to="/profile" className="header-profile" style ={ { display: profileShow } } />
        </div>
    )
}

export default Header;