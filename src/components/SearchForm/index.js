import React from 'react';
import './SearchForm.css';
import lenth from "../../images/lenth.svg";
import FilterCheckbox from "../FilterCheckbox";

const SearchForm = () => {
    return (
        <section className="search">
            <div className="search__container">
                <div className="search__input-box">
                    <input className="search__input" placeholder="Фильм">
                    </input>
                    <div className="search__button">
                        <img
                            src={lenth}
                            className="search__lenth"
                            alt="Лупа"/>
                    </div>
                </div>
                <div>
                    <div className="search__filter">
                        <p className="search__filter-caption">Короткометражки</p>
                        <FilterCheckbox/>
                    </div>
                </div>
            </div>
            <hr className="footer__hr"/>
        </section>
    );
};

export default SearchForm;
