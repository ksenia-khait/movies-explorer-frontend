import React from 'react';
import MoviesCardlist from "../MoviesCardlist";
import SearchForm from "../SearchForm";

const SavedMovies = () => {
    return (
        <div>
            <SearchForm/>
            <MoviesCardlist/>
        </div>
    );
};

export default SavedMovies;
