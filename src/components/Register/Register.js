import React, {useEffect, useRef} from 'react';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import {useFormAndValidate} from '../../utils/FormWithValidation';

function Register({ onUpdate }) {

    const { values, handleChange, errors, isValid, setIsValid } = useFormAndValidate();
    
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    
    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdate({
              name: nameRef.current.value,
              email: emailRef.current.value,
              password: passwordRef.current.value,
            })
    }

    const checkInputValue = () => {
        if (nameRef.current.value === '' || emailRef.current.value === '' || passwordRef.current.value === '' ) {
            setIsValid(false);
        }
    }

    useEffect(() => {
        checkInputValue();
    });    

    return (
        <AuthForm 
            formTitle="Добро пожаловать!" 
            formButtonText="Зарегистрироваться" 
            formContentText="Уже зарегистрированы?" 
            formRedirectText="Войти"
            formRedirectLink="/signin" 
            formPadding="register-form"
            handleSubmit={handleSubmit}
            isValid={isValid}
        >
            <div className="form__area">
            <label className="form__label" htmlFor="Имя">Имя</label>
            <input
             form="form"
             type="text"
             name="name"
             id="name"
             className={`form__input ${errors.name ? 'form__input-error' : ''}`}
             minLength="2"
             maxLength="30"
             placeholder="Имя"
             ref={nameRef}
             required
             value={values.name || ''}
             onChange={handleChange}
             autoFocus
              />
            <span className={`form__input-message ${!isValid ? 'form__input-message_active' : ''}`}>{errors.name}</span>
        </div>
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
             autoFocus
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
             autoFocus
              />
            <span className={`form__input-message ${!isValid ? 'form__input-message_active' : ''}`}>{errors.password}</span>
        </div>
        </AuthForm>
    )
}

export default Register;