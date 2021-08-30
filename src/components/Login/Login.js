import React, {useEffect, useRef} from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import {useFormAndValidate} from '../../utils/FormWithValidation';

function Login({ onUpdate }) {

    const { values, handleChange, errors, isValid, setIsValid } = useFormAndValidate();
    
    const emailRef = useRef();
    const passwordRef = useRef();
    
    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdate({
              email: emailRef.current.value,
              password: passwordRef.current.value,
            })
    }

    const checkInputValue = () => {
        if (emailRef.current.value === '' || passwordRef.current.value === '' ) {
            setIsValid(false);
        }
    }

    useEffect(() => {
        checkInputValue();
    });

    return (
        <AuthForm 
            formTitle="Рады видеть!" 
            formButtonText="Войти" 
            formContentText="Ещё не зарегистрированы?" 
            formRedirectText="Регистрация" 
            formRedirectLink="/signup"
            formPadding="login-form"
            handleSubmit={handleSubmit}
            isValid={isValid}
        >

<div className="form__area">
            <label className="form__label" htmlFor="email">Email</label>
            <input
             form="form"
             type="email"
             name="email"
             id="email"
             className={`form__input ${errors.email ? 'form__input-error' : ''}`}
             placeholder="E-mail"
             required
             ref={emailRef}
             value={values.email || ''}
             onChange={handleChange}
             autoFocus={true}
              />
            <span className={`form__input-message ${!isValid ? 'form__input-message_active' : ''}`}>{errors.email}</span>
        </div>
        <div className="form__area">
            <label className="form__label" htmlFor="password">Пароль</label>
            <input
             form="form"
             type="text"
             name="password"
             id="password"
             className={`form__input ${errors.password ? 'form__input-error' : ''}`}
             minLength="8"
             placeholder="Пароль"
             required
             ref={passwordRef}
             value={values.password || ''}
             onChange={handleChange}
             autoFocus={true}
              />
            <span className={`form__input-message ${!isValid ? 'form__input-message_active' : ''}`}>{errors.password}</span>
        </div>
        </AuthForm>
    )
}

export default Login;