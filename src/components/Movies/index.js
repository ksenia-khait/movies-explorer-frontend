import React from 'react';
import MoviesCardlist from "../MoviesCardlist";
import Preloader from "../Preloader";
import SearchForm from "../SearchForm";

const Movies = () => {
    return (
        <div>
            <SearchForm/>
            <MoviesCardlist/>
            {/*<Preloader/>*/}
        </div>
    );
};

export default Movies;
