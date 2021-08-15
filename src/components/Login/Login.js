import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import FormInput from '../FormInput/FormInput';

function Login() {
    return (
        <AuthForm 
            formTitle="Рады видеть!" 
            formButtonText="Войти" 
            formContentText="Ещё не зарегистрированы?" 
            formRedirectText="Регистрация" 
            formRedirectLink="/signup"
            formPadding="login-form"
        >
            <FormInput label="Почта" type="email" name="email" minLength="" maxLength="" placeholder="E-mail" />
            <FormInput label="Пароль" type="text" name="password" minLength="8" maxLength="" placeholder="Пароль" />
        </AuthForm>
    )
}

export default Login;