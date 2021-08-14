import React from 'react';
import './RegisterInput.css';

function RegisterInput({label, type, name, placeholder, minLength, maxLength}) {
    return(
        <div className="register-input">
            <label className="register-input__label">{label}</label>
            <input type={type} name={name} className="register-input__input" minLength={minLength} maxLength={maxLength} placeholder={placeholder} autoFocus="blur" required />
        </div>
    )
}

export default RegisterInput;