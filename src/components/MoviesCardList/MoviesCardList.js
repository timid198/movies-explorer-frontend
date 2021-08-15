import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({cards, page}) {
    return (
        <section className="movies-card-list">
            {cards.map((item) => (<MoviesCard key={item._id} card={item} />))}
        </section>
    )
}

export default MoviesCardList;