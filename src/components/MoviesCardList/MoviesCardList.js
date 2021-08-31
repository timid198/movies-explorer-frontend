import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({likeFunc, userId, page, cards, saved}) {

    const renderCardList = (link, sorted, choosen) => {
        if ( link === "movies" ) {
            return sorted.map((item) => {
                console.log(item);
                if (choosen.find((el) => el.id === item.movieId)) {
                    return (<MoviesCard key={item._id} card={item} userId={userId} likeFunc={likeFunc} added={true} page={page} />)
                }else{
                    return (<MoviesCard key={item._id} card={item} userId={userId} likeFunc={likeFunc} page={page} />)  
                }
            })
        } else if ( link === "saved-movies" ) {
            return choosen.map((item) => (<MoviesCard key={item._id} card={item} userId={userId} likeFunc={likeFunc} added={true} page={page} />))
        }
    }

    return (
        <section className="movies-card-list">
            {/* {cards.map((item) => (<MoviesCard key={item._id} card={item} userId={userId} likeFunc={likeFunc} />))} */}
            {renderCardList(page, cards, saved)}
        </section>
    )
}

export default MoviesCardList;