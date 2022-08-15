import React from 'react';
import "./Portfolio.css";
import arrow from '../../images/arrow.svg';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="portfolio__container">
                <h5 className="portfolio__title">Портфолио</h5>
                <nav className="portfolio__nav">
                    <li className="portfolio__link-box">
                        <a className="portfolio__link" href="https://github.com/ksenia-khait/how-to-learn">Статичный сайт</a>
                        <img
                            className="portfolio__link-img"
                            src={arrow}
                            alt="Ссылка"
                        />
                    </li>
                    <li className="portfolio__link-box">
                        <a className="portfolio__link" href="https://github.com/ksenia-khait/russian-travel">Адаптивный сайт</a>
                        <img
                            className="portfolio__link-img"
                            src={arrow}
                            alt="Ссылка"
                        />
                    </li>
                    <li className="portfolio__link-box">
                        <a className="portfolio__link" href="https://github.com/ksenia-khait/mesto">Одностраничное приложение</a>
                        <img
                            className="portfolio__link-img"
                            src={arrow}
                            alt="Ссылка"
                        />
                    </li>
                </nav>
            </div>
        </section>
    );
};

export default Portfolio;
