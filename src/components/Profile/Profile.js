import React, {useState, useContext, useEffect} from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormAndValidate } from '../../utils/FormWithValidation';

function Profile({handleButtonOpenClick, headerBackgrounColor, onUpdate, logout, title, navShow, loggedIn, isLoading}) {
    
    const currentUser = useContext(CurrentUserContext);
    const {values, handleChange, errors, isValid} = useFormAndValidate();
    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [formTitle, setFormTitle] = useState(currentUser.name);

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);        
    }, [currentUser]);

    useEffect(() => {
        values.name = name;
        values.email = email;        
    });

    useEffect(() => {
        setFormTitle(title);
    }, [title]);

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdate({
              name: name,
              email: email,
            })
    }

    function handleChangeName(e) {
        setName(e.target.value);
      }
    
      function handleChangeEmail(e) {
        setEmail(e.target.value);
      }

    return (
        <div className="profile">            
            <Header handleButtonOpenClick={handleButtonOpenClick} headerBackgrounColor={headerBackgrounColor} navShow={navShow} loggedIn={loggedIn} />
            <div className="profile-content">
                <h2 className="profile-title">Привет, {formTitle}!</h2>
                { isLoading ? <Preloader /> : ''}
                <form className="profile__form" onSubmit={handleSubmit}>
                    <fieldset className="profile__name">
                        <label className="register-input__label">Имя</label>
                        <input
                        id="name"
                        type="text"
                        name="name"
                        className={`register-input__input ${errors.name ? 'register-input__error' : ''}`}
                        minLength="2"
                        maxLength="30"
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => {handleChange(e);
                                          handleChangeName(e)}}
                        required
                        autoFocus={true}
                        formNoValidate
                        />
                        <span className={`register-input_error-hidden ${errors.name ? 'register-input_error-active' : ''}`}>{errors.name}</span>                    
                    </fieldset>
                    <fieldset className="profile__email">
                    <label className="register-input__label">E-mail</label>
                        <input
                        id="email"
                        type="email"
                        name="email"
                        className={`register-input__input ${errors.email ? 'register-input__error' : ''}`}                    
                        placeholder="Электронная почта"
                        value={email}
                        onChange={(e) => {handleChange(e);
                                          handleChangeEmail(e)}}
                        required
                        autoFocus={true}
                        formNoValidate
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
        </div>
    )
}

export default Profile;