import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({cards}) {
    return (
        <section className="movies-card-list">
            {cards.map((item) => (<MoviesCard card={item} />))}
        </section>
    )
}

export default MoviesCardList;