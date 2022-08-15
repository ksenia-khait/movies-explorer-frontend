import React from 'react';
import "./AboutProject.css";

const AboutProject = () => {
    return (
        <section className="about" id='about'>
            <div className="about__container">
                <h3 className="about__title">О проекте</h3>
                <hr className="about__horizontal-line"/>
                <div className="about__info">
                    <div className="about__info-item">
                        <h4 className="about__info-title">Дипломный проект включал 5 этапов</h4>
                        <p className="about__info-paragraph">Составление плана, работу над бэкендом, вёрстку,
                            добавление
                            функциональности и финальные
                            доработки.</p>
                    </div>
                    <div className="about__info-item">
                        <h4 className="about__info-title">На выполнение диплома ушло 5 недель</h4>
                        <p className="about__info-paragraph">У каждого этапа был мягкий и жёсткий дедлайн,
                            которые нужно
                            было соблюдать, чтобы успешно
                            защититься.</p>
                    </div>
                </div>
                <div className="track-grid">
                    <div className="track-grid__cell"><p className="track-grid__title">1 неделя</p></div>
                    <div className="track-grid__cell"><p className="track-grid__title">4 недели</p></div>
                    <div className="track-grid__cell"><p className="track-grid__subtitle">Back-end</p></div>
                    <div className="track-grid__cell"><p className="track-grid__subtitle">Front-end</p></div>
                </div>
            </div>
        </section>
    );
};

export default AboutProject;
