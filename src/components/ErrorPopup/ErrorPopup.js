import React from 'react';
import './ErrorPopup.css';
import { useHistory } from 'react-router-dom'

function ErrorPopup({open, updater, statusCode, text}) {

    const history = useHistory();
    const openPopup = `error-popup ${open ? 'popup_open' : ''}`;

    const handleClick = (e) => {
        e.preventDefault();
        updater();
        history.push('/');
    }

    return (
        <div className={openPopup}>
            <div className="error-popup__mistake">
                <h2 className="error-popup__title">{statusCode}</h2>
                <p className="error-popup__message">{text}</p>
            </div>
            <button type="button" className="error-popup__button" onClick={handleClick}>Назад</button>
        </div>
    )
}

export default ErrorPopup;