import React from 'react';
import './FormInput.css';

function FormInput({label, type, name, minLength, maxLength, placeholder}) {
    return (
        <div className="form__area">
            <label className="form__label" htmlFor={name}>{label}</label>
            <input type={type} name={name} className="form__input" minLength={minLength} maxLength={maxLength} placeholder={placeholder} required />
        </div>
    )
}

export default FormInput;