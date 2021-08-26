import React, {useState} from 'react';
import './Profile.css';
import RegisterInput from '../RegisterInput/RegisterInput';
import { useFormAndValidate } from '../../utils/FormWithValidation';

function Profile() {

    const {values, handleChange, errors, isValid} = useFormAndValidate();

    return (
        <div className="profile">
            <h2 className="profile-title">Привет, !</h2>
            <form className="profile__form">
                <fieldset className="profile__name">
                    <RegisterInput
                     label="Имя"
                     type="text"
                     name="name"
                     placeholder=""
                     minLength="2"
                     maxLength="30"
                     values={values.name}
                     handleChange={handleChange}
                     errors={errors.name}
                      />
                </fieldset>
                <fieldset className="profile__email">
                    <RegisterInput
                     label="E-mail"
                     type="email"
                     name="email"
                     placeholder=""
                     minLength=""
                     maxLength=""
                     values={values.email}
                     handleChange={handleChange}
                     errors={errors.email}
                      />
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
            <button type="submit" className="profile__logout">Выйти из аккаунта</button>
        </div>
    )
}

export default Profile;