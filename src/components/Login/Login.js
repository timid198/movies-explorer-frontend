import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';

function Login() {
    return (
        <div className="login">
            <Link to="/" className="login-logo" />
            <h2 className="login-title">Рады видеть!</h2>
            <fieldset className="login-fieldset">
                <FormInput label="Почта" type="email" name="email" minLength="" maxLength="" placeholder="E-mail" />
                <FormInput label="Пароль" type="text" name="password" minLength="8" maxLength="" placeholder="Пароль" />
                <label className="login-submit" htmlFor="register">
                    <button type="submit" name="register" className="login-submit__button">Войти</button>
                </label>
            </fieldset>
            <div className="login-redirect">
                <p className="login-redirect__content">Ещё не зарегистрированы?&nbsp;</p>
                <Link to="/signup" className="login-redirect__link">Регистрация</Link>
            </div>
        </div>
    )
}

export default Login;