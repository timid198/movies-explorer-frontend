import React, { useEffect, useState, useRef } from 'react';
import './SearchForm.css';
import { useFormAndValidate } from '../../utils/FormWithValidation';

function SearchForm({  onChange, onSubmit }) {

const {values, handleChange, errors, isValid} = useFormAndValidate();

const [ isInputFocused, setIsInputFocused ] = useState(false);

useEffect(()=> {
    setIsInputFocused(true);
  }, []);

const movieRef = useRef();

function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit();
    onChange({
          movies: movieRef.current.value,
        });
        movieRef.current.value = '';
}

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <fieldset className="search-form__input-area">
                <label className="search-form__search-section">
                    <input 
                     type="text" 
                     name="movie"
                     placeholder="Фильм"
                     className={`search-form__input ${errors.movie ? 'search-form__input-error' : '' }`}
                     required
                     value={values.movie || ""}
                     onChange={handleChange}
                     onFocus={() => setIsInputFocused(true)}
                     ref={movieRef}
                     autoFocus
                     minLength="1"
                    />  
                    <button
                     type="submit"
                     className={`search-form__submit ${isValid ? 'search-form__submit_active' : ''}`}
                     disabled={isValid ? false : true}                     
                    >Поиск</button>
                </label> 
                <span className={`search-form__error ${errors.movie && isInputFocused ? 'search-form__error_active' : ''}`} >Нужно ввести ключевое слово</span>                             
            </fieldset>            
            <fieldset className="search-form__selection">
                <label className="search-form__selection-section">
                    <input type="checkbox" className="search-form__selector search-form__selector-hidden" />
                    <span className="search-form__selector search-form__pseudo"></span>
                    <span className="search-form__short-movies">Короткометражки</span>
                </label>
            </fieldset>
        </form>
    )
}

export default SearchForm;