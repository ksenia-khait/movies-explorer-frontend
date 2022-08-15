import React from 'react';
import "./Techs.css";

const Techs = () => {
    return (
        <section className="technologies" id="techs">
            <div className="technologies__container">
                <h3 className="about__title">Технологии</h3>
                <hr className="about__horizontal-line"/>
                <div className="technologies__heading">
                    <h2 className="technologies__title">7 технологий</h2>
                    <p className="technologies__subtitle">На курсе веб-разработки мы освоили технологии, которые
                        применили в дипломном проекте.</p>
                </div>
                <div className="technologies__stack">
                    <p className="technologies__stack-item">HTML</p>
                    <p className="technologies__stack-item">CSS</p>
                    <p className="technologies__stack-item">JS</p>
                    <p className="technologies__stack-item">React</p>
                    <p className="technologies__stack-item">Git</p>
                    <p className="technologies__stack-item">Express.js</p>
                    <p className="technologies__stack-item">mongoDB</p>
                </div>
            </div>
        </section>
    );
};

export default Techs;
