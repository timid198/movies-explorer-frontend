import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({cards}) {
    return(
        <div className="Movies">
            <SearchForm />
            <MoviesCardList cards={cards} /> 
            <div className="Movies__add">
                <button type="button" className="Movies__more">Ещё</button>
            </div>            
        </div>
    )
}

export default Movies;