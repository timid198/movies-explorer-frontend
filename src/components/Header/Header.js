import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({handleButtonOpenClick, headerBackgrounColor, loggedIn}) {
    
    const content = (auth) => {
        console.log(auth);
        if (auth) {
        return <>
                <Navigation />
                <Link to="/profile" className="header-profile" />
               </>
        }
        return <div className="header-auth">
                    <Link to="/signup" className="header-auth__registration" >Регистрация</Link>
                    <Link to="/signin" className="header-auth__login" >Войти</Link>                
               </div>
    }
    console.log(loggedIn);
    return (
        <div className="header" style ={ { backgroundColor: headerBackgrounColor } }>
            
            <Link to="/" className="header-logo" />
            
            {content(loggedIn)}

            
             
            <button type="button" className="header-burger" onClick={handleButtonOpenClick} />            
        </div>        
    )
}

export default Header;