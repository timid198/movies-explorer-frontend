import React from 'react';
import './MoviesCard.css';

function MoviesCard({card}) {
    console.log(card);

    const bringingTheTime = () => {
        let hours = Math.floor(card.duration/60);
        let minutes = card.duration - (hours*60);
        if (hours !== 0) {
        return `${hours}ч ${minutes}м`;
        }
        return `${minutes}м`;
    }

    const like = `movies-card__like-place ${card.like && card.save ? 'movies-card__remove' : card.like ? 'movies-card__like' : 'movies-card__unlike'}`;

    return (
        <div className="movies-card">
            <div className="movies-card__content">
                <div className="movies-card__about">
                    <h5 className="movies-card__title">{card.nameRU}</h5>
                    <p className="movies-card__duration">{bringingTheTime()}</p>
                </div>
                <button type="button" className={like} />
            </div>
            <a href={card.trailerLink} className="movies-card__link">
                <img src={`https://api.nomoreparties.co${card.image.url}`} alt={card.nameRU} className="movies-card__image" />
            </a>
        </div>
    )
}

export default MoviesCard;