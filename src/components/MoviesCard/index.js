import React from 'react';
import './MoviesCard.css';
import cardimg from '../../images/pic__COLOR_pic.jpg';

const MoviesCard = () => {
    return (

        <div className="movie">
            <img className="movie__image" src={cardimg} alt="Изображение"/>
            <div className="movie__text-box">
                <div className="movie__caption">
                    <h2 className="movie__text">33 слова о дизайне</h2>
                    <button className="movie__add-button"></button>
                </div>
                <p className="movie__timecode">1ч42м</p>
            </div>
        </div>

    );
};

export default MoviesCard;
