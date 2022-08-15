import React from 'react';
import "./Error.css";

const Error = () => {
    return (
        <section className="not-found-error">
            <div className="not-found-error__container">
                <div className="register__form-box">
                    <h1 className="not-found-error__title">404</h1>
                    <p className="not-found-error__subtitle">Страница не найдена</p>
                </div>
                <a href="#" className="not-found-error__link">Назад</a>
            </div>
        </section>
    );
};

export default Error;
