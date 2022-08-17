import React from 'react';
import './Promo.css';
import yplogo from'../../images/banner_y_p.svg';

const Promo = () => {
    return (
        <section className="banner">
            <img className="banner__background" src={yplogo} alt="Логотип" />
            <div>
                <h1 className="banner__title">Учебный проект студента факультета Веб-разработки.</h1>
            </div>
        </section>
    );
};

export default Promo;
