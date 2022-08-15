import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from'../../images/logo.svg';
import Navigation from "../Navigation";

const Header = () => {
    const location = useLocation();
    return (
        <header className={`header header_${ location.pathname === '/' ? 'dark-bg' : '' }`}>
            <nav className="header__navbar">
                <Link to='/'>
                    <img className="header__logo" src={logo} alt="Логотип"/>
                </Link>
                <Navigation/>
            </nav>

        </header>
    );
};

export default Header;
