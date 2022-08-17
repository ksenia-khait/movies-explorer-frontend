import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div><p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p></div>
                <hr className="footer__hr"/>
                <div className="footer__underline">
                    <div className="footer__year"><p className="footer__link">© 2020</p></div>
                    <div className="footer__links">
                        <a className="footer__link" href="https://github.com/ksenia-khait/movies-explorer-frontend">Яндекс.Практикум</a> <a className="footer__link"
                                                                                    href="#">Github</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
