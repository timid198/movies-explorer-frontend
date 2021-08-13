import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({cards}) {
    return (
        <div className="Saved-movies">
            <SearchForm />
            <MoviesCardList cards={cards} />
        </div>
    )
}

export default SavedMovies;