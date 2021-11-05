import React, { useEffect, useState } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function Movies({handleButtonOpenClick, headerBackgrounColor, page, likeFunc, userId, cards, saved, width, navShow, loggedIn, isLoading}) {
    
    const [isSearchRequest, setIsSearchRequest] = useState({movies: '', movieShort: true});
    const [isActive, setIsActive] = useState(true);
    const [movieCount, setMovieCount] = useState(5);
    const [isMovieSearched, setIsMovieSearched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [moviesAdd, setMoviesAdd] = useState(3);
    
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

    const filteredMovies = cards.filter(card => filterMovies(card, isSearchRequest));    
    const toAddingMovies = filteredMovies.slice(0, movieCount);

    const toAddMoviesInitial = () => {
        if ((filteredMovies.length > 0 && filteredMovies.length < 5) || (filteredMovies.length === toAddingMovies.length)) {
            setIsActive(false);
            setMovieCount(filteredMovies.length);
            setLoading(false);
        } if (!((filteredMovies.length - toAddingMovies.length) < 3)) {
            setIsActive(true);
            setMovieCount(toAddingMovies.length);
            setLoading(false);
        }   
    }; 

    useEffect(() => {
        if (filteredMovies.length !== 0 || filteredMovies.length === 0) {
            setLoading(false);
        }
    }, [filteredMovies])

    useEffect(() => {
        setMovieCount(5);
    }, [isSearchRequest]);

    useEffect(() => {
        toAddMoviesInitial();
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (width > 320) {
            setMoviesAdd(3);
            }
            if (width <= 320) {
                setMoviesAdd(2);
            }}, 5000);
    }, [width]);

    return(        
        <div className="Movies">
            <Header handleButtonOpenClick={handleButtonOpenClick} headerBackgrounColor={headerBackgrounColor} navShow={navShow} loggedIn={loggedIn} />
                <div className="Movies-content">                    
                    <SearchForm onChange={handleSearchRequest} onSubmit={handleSubmit} />
                    {loading || isLoading ? (<Preloader />) : ''}
                    {  (!isMovieSearched) ? (
                        <div className="Movies__before-search">                            
                        </div>
                    ) : ( (filteredMovies.length !== 0) ? (
                    <div className="Movies__add">
                        <MoviesCardList page={page} likeFunc={likeFunc} userId={userId} cards={toAddingMovies} saved={saved} /> 
                        <button type="button" className={`Movies__more ${!isActive ? 'Movies__more_none' : ''}`} onClick={() => {setMovieCount(prevCount => prevCount + moviesAdd)}}>Ещё</button>
                    </div>) : 
                    ((!errorMessage) ? (<h2 className="Movies__nothing-yet">Ничего не найдено</h2>) : (<h2 className="Movies__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h2>)))}         
                </div>
            <Footer />            
        </div>
        
    )
}

export default Movies;