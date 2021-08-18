import React, { useEffect } from 'react';
import './SearchForm.css';
import { useFormAndValidate } from '../../utils/FormWithValidation';

function SearchForm({ handlerMovieSearch }) {

const {values, handleChange, errors, isValid, resetForm} = useFormAndValidate();

useEffect(()=> {
    resetForm({movie:''});
  },[]);

function handleMovieSearch(evt) {
    evt.preventDefault();
    handlerMovieSearch({movie: values.movie})
}

    return (
        <form className="search-form">
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
                    />                    
                    <button
                     type="submit"
                     className={`search-form__submit ${!isValid ? 'search-form__submit_disabled' : ''}`}
                     disabled={!isValid ? true : ''}
                    >Поиск</button>
                </label>                              
            </fieldset>
            <span className={`search-form__error ${errors.movie ? 'search-form__error_active' : ''}`} >{errors.movie}</span>
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