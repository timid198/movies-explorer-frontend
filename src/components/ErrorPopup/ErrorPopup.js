import React from 'react';
import './ErrorPopup.css';
import { Link } from 'react-router-dom'

function ErrorPopup({open, statusCode, text}) {

const openPopup = `error-popup ${open ? 'popup_open' : ''}`;

    return (
        <div className={openPopup}>
            <div className="error-popup__mistake">
                <h2 className="error-popup__title">{statusCode}</h2>
                <p className="error-popup__message">{text}</p>
            </div>
            <Link to="/" className="error-popup__link">Назад</Link>
        </div>
    )
}

export default ErrorPopup;