import React from 'react';
import './AuthForm.css';
import { Link } from 'react-router-dom';

function AuthForm({formTitle, formButtonText, formContentText, formRedirectText, formPadding, formRedirectLink, children, handleSubmit, isValid}) {

const submitStyle = `auth-form__submit ${formPadding ? formPadding : ''}`

    return (
        <form id="form" className="auth-form" onSubmit={handleSubmit}>
            <Link to="/" className="auth-form__logo" />
            <h2 className="auth-form__title">{ formTitle }</h2>
            <fieldset className="auth-form__fieldset">
                {children}
                <label className={submitStyle} htmlFor="submit-button">
                    <button
                     type="submit"
                     name="submit-button"
                     className={`auth-form__button ${!isValid ? 'auth-form__button-disabled' : ''}`}
                     disabled={!isValid ? true : false}
                     autoFocus={true}>{ formButtonText }</button>
                </label>
            </fieldset>
            <div className="auth-form__redirect">
                <p className="auth-form__content">{ formContentText }&nbsp;</p>
                <Link to={formRedirectLink} className="auth-form__link">{ formRedirectText }</Link>
            </div>
        </form>
    )
}

export default AuthForm;