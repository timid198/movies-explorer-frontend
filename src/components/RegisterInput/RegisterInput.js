import React from 'react';
import './RegisterInput.css';

function RegisterInput({label, type, name, placeholder, minLength, maxLength, values, handleChange, errors, message}) {

    console.log(errors, message);
    return(
        <div className="register-input">
            <label className="register-input__label">{label}</label>
            <input
             type={type}
             name={name}
             className={`register-input__input ${errors ? 'register-input__error' : ''}`}
             minLength={minLength}
             maxLength={maxLength}
             placeholder={placeholder}
             value={values || ""}
             onChange={handleChange}
             required
              />
            <span className={`register-input_error-hidden ${errors ? 'register-input_error-active' : ''}`}>{errors}</span>
        </div>
    )
}

export default RegisterInput;