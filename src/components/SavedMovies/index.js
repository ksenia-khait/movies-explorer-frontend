import React from 'react';
import MoviesCardlist from "../MoviesCardlist";
import SearchForm from "../SearchForm";
import Navigation from "../Navigation";

const SavedMovies = () => {
    return (
        <div>
            <SearchForm/>
            <MoviesCardlist/>
            {/*<Navigation/>*/}
        </div>
    );
};

export default SavedMovies;
