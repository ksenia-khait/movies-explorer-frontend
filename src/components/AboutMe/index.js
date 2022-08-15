import React from 'react';
import "./AboutMe.css";
import photo from '../../images/profile_img.png'

const AboutMe = () => {
    return (
        <section className="profile" id='about-me'>
            <div className="profile__container">
                <h3 className="about__title">Студент</h3>
                <hr className="about__horizontal-line"/>
                <div className="profile__info">
                    <div className="profile__text-block">
                        <div>
                            <h2 className="profile__title">Виталий</h2>
                            <h5 className="profile__subtitle">Фронтенд-разработчик, 30 лет</h5>
                            <p className="profile__paragraph">Я родился и живу в Саратове, закончил
                                факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё
                                увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
                                компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
                                заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        </div>
                        <a className="profile__link" href="#">Github</a>
                    </div>
                    <div className="profile__img-order">
                        <img
                            src={photo}
                            className="profile__img"
                            alt="Фото"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
