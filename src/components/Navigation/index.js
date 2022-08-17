import React from 'react';
import {Link, useLocation} from "react-router-dom";
import './Navigation.css';
import cross from '../../images/cross.svg';

const Navigation = () => {
    const location = useLocation();
    return location.pathname === '/' ? (
        <>
            <div className="header__landing-links">
                <Link className="header__navlink" to='/signup'>Регистрация</Link>
                <Link className="header__button" to='/signin'>Войти</Link>
            </div>
        </>
    ) : (
        <>
            <div className="header__links">
                <Link
                   className="header__navlink header__navlink_margin-small header__navlink_black-text header__navlink_font-bold" to='/movies'>Фильмы</Link>
                <Link className="header__navlink header__navlink_font-regular header__navlink_black-text" to='/saved-movies'>Сохраненные
                    фильмы</Link>
            </div>
            <div className="header__links">
                <Link className="header__button-rounded" to='/profile'>Аккаунт</Link>
            </div>
            <div className="burger-menu"></div>
            <section className="menu menu_active">
                <div className="menu__container">
                    <nav className="menu__links">
                        <button className="menu__close">
                            <img className="menu__img" src={cross} alt="Закрыть"/>
                        </button>
                        <li className="menu__item"><Link className="menu__link" to='/'>Главная</Link></li>
                        <li className="menu__item"><Link className="menu__link" to='/movies'>Фильмы</Link></li>
                        <li className="menu__item"><Link className="menu__link" to='/saved-movies'>Сохраненные фильмы</Link></li>
                    </nav>
                    <Link className="menu__button" to='/profile'>Аккаунт</Link>
                </div>
            </section>
        </>
    )
};

export default Navigation;
