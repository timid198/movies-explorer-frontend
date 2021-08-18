import React from 'react';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import FormInput from '../FormInput/FormInput';

function Register() {
    return (
        <AuthForm 
            formTitle="Добро пожаловать!" 
            formButtonText="Зарегистрироваться" 
            formContentText="Уже зарегистрированы?" 
            formRedirectText="Войти"
            formRedirectLink="/signin" 
            formPadding="register-form"
        >
            <FormInput label="Имя" type="text" name="name" minLength="2" maxLength="30" placeholder="Имя" />
            <FormInput label="Почта" type="email" name="email" minLength="" maxLength="" placeholder="E-mail" />
            <FormInput label="Пароль" type="text" name="password" minLength="8" maxLength="" placeholder="Пароль" />
        </AuthForm>
    )
}

export default Register;