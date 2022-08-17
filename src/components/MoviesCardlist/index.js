import React from 'react';
import {useLocation} from "react-router-dom";
import './MoviesCardlist.css';
import MoviesCard from "../MoviesCard";

const MoviesCardlist = () => {
    const location = useLocation();
    return (
        <>
            <section className="movies-container">
                <div className="movies">
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                </div>
            </section>
            {location.pathname === '/movies' ? (
                <section className="more">
                    <div className="more__button">Еще</div>
                </section>
            ) : ''}
        </>
    );
};

export default MoviesCardlist;
