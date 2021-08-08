import React from 'react';
import './SearchForm.css';

function SearchForm() {
    return (
        <form className="search-form">
            <fieldset className="search-form__input-area">
                <section className="search-form__search-section">
                    <input type="text" name="movie" placeholder="Фильм" className="search-form__input" />
                    <button type="submit" className="search-form__submit">Поиск</button>
                </section>                
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