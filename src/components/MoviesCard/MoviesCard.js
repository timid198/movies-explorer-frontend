import React from 'react';
import './MoviesCard.css';

function MoviesCard({likeFunc, card, userId, added, page}) {

    const bringingTheTime = () => {
        let hours = Math.floor(card.duration/60);
        let minutes = card.duration - (hours*60);
        if (hours !== 0) {
        return `${hours}ч ${minutes}м`;
        }
        return `${minutes}м`;
    }

    const handleMovieLike = (e) => {
        console.log(card.movieId, page);
        e.preventDefault();
        likeFunc(card, page);
    }

    const like = `movies-card__like-place ${page === "movies" && added === true ? 'movies-card__like' : page === "saved-movies" && added === true ? 'movies-card__remove' : 'movies-card__unlike'}`;
    const imageSource = page === "movies" ? `https://api.nomoreparties.co${card.image.url}` : page === "saved-movies" ? `${card.image}` : ''

    return (
        <div className="movies-card">
            <div className="movies-card__content">
                <div className="movies-card__about">
                    <h5 className="movies-card__title">{card.nameRU}</h5>
                    <p className="movies-card__duration">{bringingTheTime()}</p>
                </div>
                <button type="button" className={like} onClick={handleMovieLike} />
            </div>
            <a href={card.trailerLink} className="movies-card__link">
                <img src={imageSource} alt={card.nameRU} className="movies-card__image" />
            </a>
        </div>
    )
}

export default MoviesCard;