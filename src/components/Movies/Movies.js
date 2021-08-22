import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({cards}) {
    const [isSearchRequest, setIsSearchRequest] = useState({movies: ''});
    const [isActive, setIsActive] = useState(true);
    const [movieCount, setMovieCount] = useState(5);
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
    if (movie.nameRU.toString().toLowerCase().includes(query.movies.toString().toLowerCase()) || 
        (movie.nameEN !== null && 
            movie.nameEN.toString().toLowerCase().includes(query.movies.toString().toLowerCase()))) {
                return movie;
            }
            return;

    };

    const filteredMovies = cards.filter(card => filterMovies(card, isSearchRequest));
    const toAddingMovies = filteredMovies.slice(0, movieCount);

    const toAddMoviesInitial = () => {
        if (cards.length !== 0) {            
            if ((filteredMovies.length > 0 && filteredMovies.length < 5) || (filteredMovies.length === toAddingMovies.length)) {
                setIsActive(false);
                setMovieCount(filteredMovies.length);
                setLoading(false);
            } if (!((filteredMovies.length - toAddingMovies.length) < 3) ) {
                setIsActive(true);
                setMovieCount(toAddingMovies.length);
                setLoading(false);
            }
        }    
    };    

    useEffect(() => {
        toAddMoviesInitial();
    });

    useEffect(() => {
        setMovieCount(5);
    }, [isSearchRequest]);

    return(
        <div className="Movies">
            <SearchForm onChange={handleSearchRequest} onSubmit={handleSubmit} />
            {  (!isMovieSearched) ? (
                <div className="Movies__before-search">
                    {loading ? (<Preloader />) : ''}
                </div>
            ) : ( (filteredMovies.length !== 0) ? (
            <div className="Movies__add">
                <MoviesCardList cards={toAddingMovies} /> 
                <button type="button" className={`Movies__more ${!isActive ? 'Movies__more_none' : ''}`} onClick={() => {setMovieCount(prevCount => prevCount + 3)}}>Ещё</button>
            </div>) : 
            ((!errorMessage) ? (<h2 className="Movies__nothing-yet">Ничего не найдено</h2>) : (<h2 className="Movies__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h2>)))}         
        </div>
    )
}

export default Movies;