import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({handleButtonOpenClick, headerBackgrounColor, profileShow, loginShow, registerShow, navShow, burgerMenuShow, cards}) {
    return (
        <div>
            <Header handleButtonOpenClick headerBackgrounColor profileShow loginShow registerShow navShow burgerMenuShow />
                <div className="Saved-movies">
                    <SearchForm />
                    <MoviesCardList cards={cards} />
                </div>
            <Footer />
        </div>
    )
}

export default SavedMovies;