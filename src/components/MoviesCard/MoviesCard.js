import React from 'react';
import './MoviesCard.css';

function MoviesCard({card}) {

const like = `movies-card__like-place ${card.like && card.save ? 'movies-card__remove' : card.like ? 'movies-card__like' : 'movies-card__unlike'}`;

    return (
        <div className="movies-card">
            <div className="movies-card__content">
                <div className="movies-card__about">
                    <h5 className="movies-card__title">{card.name}</h5>
                    <p className="movies-card__duration">{card.duration}</p>
                </div>
                <button type="button" className={like} />
            </div>
            <img src={card.image} alt={card.name} className="movies-card__image" />
        </div>
    )
}

export default MoviesCard;