import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';

function Register() {
    return (
        <div className="register">
            <Link to="/" className="register-logo" />
            <h2 className="register-title">Добро пожаловать!</h2>
            <fieldset className="register-fieldset">
                <FormInput label="Имя" type="text" name="name" minLength="2" maxLength="30" placeholder="Имя" />
                <FormInput label="Почта" type="email" name="email" minLength="" maxLength="" placeholder="E-mail" />
                <FormInput label="Пароль" type="text" name="password" minLength="8" maxLength="" placeholder="Пароль" />
                <label className="register-submit" htmlFor="register">
                    <button type="submit" name="register" className="register-submit__button">Зарегистрироваться</button>
                </label>
            </fieldset>
            <div className="register-redirect">
                <p className="register-redirect__content">Уже зарегистрированы?&nbsp;</p>
                <Link to="/signin" className="register-redirect__link">Войти</Link>
            </div>
        </div>
    )
}

export default Register;