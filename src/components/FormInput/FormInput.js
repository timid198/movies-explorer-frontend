import React, { useRef, useState } from 'react';
import './FormInput.css';

function FormInput({label, type, name, minLength, maxLength, placeholder,  onSubmit, onChange, error, isValid}) {

    const [value, setValue] = useState();

    function handleChangeInput(e) {
        setValue(e.target.value);
      }
    
    
    return (
        <div className="form__area">
            <label className="form__label" htmlFor={name}>{label}</label>
            <input
             type={type}
             name={name}
             className={`form__input ${isValid ? 'form__input-error' : ''}`}
             minLength={minLength}
             maxLength={maxLength}
             placeholder={placeholder}
             required
             ref
             value={value || ''}
             onSubmit
             onChange={() => onChange}
              />
            <span className={`form__input-message ${isValid ? 'form__input-message_active' : ''}`}>{error}</span>
        </div>
    )
}

export default FormInput;