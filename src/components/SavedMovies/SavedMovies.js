import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({handleButtonOpenClick, headerBackgrounColor, page, likeFunc, userId, cards, saved, navShow, loggedIn}) {
    console.log(loggedIn , saved);
    return (
        <div>
            <Header handleButtonOpenClick={handleButtonOpenClick} headerBackgrounColor={headerBackgrounColor} navShow={navShow} loggedIn={loggedIn} />
                <div className="Saved-movies">
                    <SearchForm />
                    <MoviesCardList page={page} likeFunc={likeFunc} userId={userId} cards={cards} saved={saved} />
                </div>
            <Footer />
        </div>
    )
}

export default SavedMovies;