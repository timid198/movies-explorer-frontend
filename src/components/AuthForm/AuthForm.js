import React from 'react';
import './AuthForm.css';
import { Link } from 'react-router-dom';

function AuthForm({formTitle, formButtonText, formContentText, formRedirectText, formPadding, formRedirectLink, children }) {

const submitStyle = `auth-form__submit ${formPadding ? formPadding : ''}`

    return (
        <div className="auth-form">
            <Link to="/" className="auth-form__logo" />
            <h2 className="auth-form__title">{ formTitle }</h2>
            <fieldset className="auth-form__fieldset">
                {children}
                <label className={submitStyle} htmlFor="submit-button">
                    <button type="submit" name="submit-button" className="auth-form__button">{ formButtonText }</button>
                </label>
            </fieldset>
            <div className="auth-form__redirect">
                <p className="auth-form__content">{ formContentText }&nbsp;</p>
                <Link to={formRedirectLink} className="auth-form__link">{ formRedirectText }</Link>
            </div>
        </div>
    )
}

export default AuthForm;