import React from 'react';
import './Profile.css';
import RegisterInput from '../RegisterInput/RegisterInput';

function Profile() {
    return (
        <div className="profile">
            <h2 className="profile-title">Привет, Андрей!</h2>
            <form className="profile__form">
                <fieldset className="profile__name">
                    <RegisterInput label="Имя" type="text" name="name" placeholder="Андрей" minLength="2" maxLength="30" />
                </fieldset>
                <fieldset className="profile__email">
                    <RegisterInput label="E-mail" type="email" name="email" placeholder="adm.az-an@yandex.ru" minLength="" maxLength="" />
                </fieldset>
                <fieldset className="profile__edit">
                    <label className="profile__edit-label">
                    <button type="submit" className="profile__edit-submit">Редактировать</button>
                    </label>
                </fieldset>
            </form>
            <button type="submit" className="profile__logout">Выйти из аккаунта</button>
        </div>
    )
}

export default Profile;