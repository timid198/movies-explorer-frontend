import React, {useRef} from 'react';
import './Profile.css';
import { useFormAndValidate } from '../../utils/FormWithValidation';

function Profile({onUpdate, logout}) {

    const {values, handleChange, errors, isValid} = useFormAndValidate();

    const nameRef = useRef();
    const emailRef = useRef();

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdate({
              name: nameRef.current.value,
              email: emailRef.current.value,
            })
    }

    return (
        <div className="profile">
            <h2 className="profile-title">Привет, !</h2>
            <form className="profile__form" onSubmit={handleSubmit}>
                <fieldset className="profile__name">
                    <label className="register-input__label">Имя</label>
                    <input
                    type="text"
                    name="name"
                    ref={nameRef}
                    className={`register-input__input ${errors.name ? 'register-input__error' : ''}`}
                    minLength="2"
                    maxLength="30"
                    placeholder="Имя"
                    value={values.name || ""}
                    onChange={handleChange}
                    required
                    />
                    <span className={`register-input_error-hidden ${errors.name ? 'register-input_error-active' : ''}`}>{errors.name}</span>                    
                </fieldset>
                <fieldset className="profile__email">
                <label className="register-input__label">E-mail</label>
                    <input
                    type="email"
                    name="email"
                    ref={emailRef}
                    className={`register-input__input ${errors.email ? 'register-input__error' : ''}`}                    
                    placeholder="E-mail"
                    value={values.email || ""}
                    onChange={handleChange}
                    required
                    />
                    <span className={`register-input_error-hidden ${errors.email ? 'register-input_error-active' : ''}`}>{errors.email}</span>
                </fieldset>
                <fieldset className="profile__edit">
                    <label className="profile__edit-label">
                    <button
                     type="submit"
                     className={`profile__edit-submit ${isValid ? 'profile__edit-submit_active' : ''}`}
                     disabled={isValid ? false : true}
                     >Редактировать</button>
                    </label>
                </fieldset>
            </form>
            <button type="submit" className="profile__logout" onClick={logout}>Выйти из аккаунта</button>
        </div>
    )
}

export default Profile;