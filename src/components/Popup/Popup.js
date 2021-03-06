import React from 'react';
import './Popup.css'
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Popup({handleButtonCloseClick, closeOverlay, open, loggedIn}) {

const menuOpen = `popup ${open ? 'popup_open' : ''}`;
    return(
        <div className={menuOpen} onClick={closeOverlay}>
            <div className="popup__main">
                <button type="reset" className="popup__close" onClick={handleButtonCloseClick} />
                <Navigation navShow="grid" loggedIn={loggedIn} />
                <Link to="/profile" className="popup__profile" /> 
            </div>
        </div>
    )
}

export default Popup;