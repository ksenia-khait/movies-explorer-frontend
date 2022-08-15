import React from 'react';
import "./NavTab.css";

const NavTab = () => {
    return (
        <section className="main-navbar">
            <nav className="main-navbar__container">
                <li className="main-navbar__list-item"><a href='#about' className="main-navbar__link">О проекте</a>
                </li>
                <li className="main-navbar__list-item"><a href='#techs' className="main-navbar__link">Технологии</a>
                </li>
                <li className="main-navbar__list-item"><a href='#about-me' className="main-navbar__link">Студент</a>
                </li>
            </nav>
        </section>
    );
};

export default NavTab;
