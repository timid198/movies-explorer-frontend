import React, { useEffect, useState, useRef } from 'react';
import './SearchForm.css';
import { useFormAndValidate } from '../../utils/FormWithValidation';

function SearchForm({  onRecieveMovies }) {

const {values, handleChange, errors, isValid, resetForm} = useFormAndValidate();

const [ isInputFocused, setIsInputFocused ] = useState(false);
const [isInputBlur, setIsInputBlur] = useState(false);

useEffect(()=> {
    setIsInputFocused(false);
    setIsInputBlur(false);
  }, [isInputBlur]);

const movieRef = useRef();

function handleSubmit(evt) {
    evt.preventDefault();   
    onRecieveMovies({
          movies: movieRef.current.value,
        });
        movieRef.current.value = '';
}

console.log(isInputFocused);

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
                     onBlur={() => setIsInputBlur(true)}
                     ref={movieRef}
                     formNoValidate
                    />  
                    <button
                     type="submit"
                     className={`search-form__submit ${!isValid ? 'search-form__submit_disabled' : ''}`}
                     disabled={!isValid ? true : ''}                     
                    >Поиск</button>
                </label> 
                <span className={`search-form__error ${(errors.movie || values.movie === '') && isInputFocused ? 'search-form__error_active' : ''}`} >Нужно ввести ключевое слово</span>                             
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