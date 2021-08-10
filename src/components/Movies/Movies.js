import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
    return(
        <div className="Movies">
            <SearchForm />
            <MoviesCardList /> 
            
        </div>
    )
}

export default Movies;