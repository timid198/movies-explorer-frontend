import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({likeFunc, userId, page, cards, saved}) {

    const renderCardList = (link, sorted, choosen) => {
        if ( link === "movies" ) {
            return sorted.map((item) => {
                console.log(item);
                if (choosen.find((el) => el.movieId === item.id)) {
                    return (<MoviesCard key={item._id} card={item} userId={userId} likeFunc={likeFunc} added={true} page={page} />)
                }else{
                    return (<MoviesCard key={item._id} card={item} userId={userId} likeFunc={likeFunc} page={page} added={false} />)  
                }
            })
        } else if ( link === "saved-movies" ) {
            return choosen.map((item) => (<MoviesCard key={item._id} card={item} userId={userId} likeFunc={likeFunc} added={true} page={page} />))
        }
    }

    return (
        <section className="movies-card-list">
            {renderCardList(page, cards, saved)}
        </section>
    )
}

export default MoviesCardList;