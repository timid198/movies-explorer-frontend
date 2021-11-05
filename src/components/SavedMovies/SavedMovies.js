import React, {useEffect, useState} from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function SavedMovies({handleButtonOpenClick, headerBackgrounColor, page, likeFunc, userId, cards, saved, navShow, loggedIn, isLoading}) {

    const [isSearchRequest, setIsSearchRequest] = useState({movies: '', movieShort: true});
    const [isMovieSearched, setIsMovieSearched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    
    function handleSearchRequest(props) {
        setIsSearchRequest(props);
    };

    function handleSubmit() {
        setLoading(true);
        setIsMovieSearched(true);
    }; 

    const filterMovies = (movie, query) => {
        if (query.movieShort) {
            if (((movie.nameRU.toString().toLowerCase().includes(query.movies.toString().toLowerCase()) || 
                (movie.nameEN !== null && 
                    movie.nameEN.toString().toLowerCase().includes(query.movies.toString().toLowerCase())))) && movie.duration <= 40) {
                    return movie;
                }
                return;
        }else{
            if (movie.nameRU.toString().toLowerCase().includes(query.movies.toString().toLowerCase()) || 
                (movie.nameEN !== null && 
                    movie.nameEN.toString().toLowerCase().includes(query.movies.toString().toLowerCase()))) {
                    return movie;
                }
                return;
        }
    };

    const filteredMovies = saved.filter(card => filterMovies(card, isSearchRequest));

    useEffect(() => {
        if (filteredMovies.length !== 0 || filteredMovies.length === 0) {
            setLoading(false);
        }
    }, [filteredMovies])

    return (
        <div className="Saved-movies">
            <Header handleButtonOpenClick={handleButtonOpenClick} headerBackgrounColor={headerBackgrounColor} navShow={navShow} loggedIn={loggedIn} />
                <div className="Saved-movies__content">                
                <SearchForm onChange={handleSearchRequest} onSubmit={handleSubmit} />
                {loading ? (<Preloader />) : ''}
                    {  (!isMovieSearched) ? (
                        <div className="Saved-movies__before-search">                            
                        </div>
                    ) : ( (filteredMovies.length !== 0) ? (
                    <div className="Saved-movies__add">
                        <MoviesCardList page={page} likeFunc={likeFunc} userId={userId} cards={filteredMovies} saved={saved} />                         
                    </div>) : 
                    ((!errorMessage) ? (<h2 className="Saved-movies__nothing-yet">Ничего не найдено</h2>) : (<h2 className="Saved-movies__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h2>)))} 
                </div>
            <Footer />
        </div>
    )
}

export default SavedMovies;