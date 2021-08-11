import React from 'react';
import './MoviesCard.css';

function MoviesCard({card}) {
    return (
        <div className="movies-card">
            <div className="movies-card__content">
                <div className="movies-card__about">
                    <h5 className="movies-card__title">{card.name}</h5>
                    <p className="movies-card__duration">{card.duration}</p>
                </div>
                <button type="button" className="movies-card__like" />
            </div>
            <div style ={ { backgroundImage : `url(${card.image})` } } className="movies-card__image"></div>
        </div>
    )
}

export default MoviesCard;