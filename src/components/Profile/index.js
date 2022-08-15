import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <>
            <section className="account">
                <div className="account__container">
                    <div className="register__form-box">
                        <h2 className="account__title">Привет, Виталий!</h2>
                        <form className="account__form">
                            <div className="account__input-box">
                                <label className="account__name">Имя</label>
                                <input className="account__text" type="text" name="" id="##" placeholder="Виталий"/>
                            </div>
                            <div className="account__input-box">
                                <label className="account__name">E-mail</label>
                                <input className="account__text" type="text" name="" id="#"
                                       placeholder="pochta@yandex.ru"/>
                            </div>
                        </form>
                    </div>
                    <div className="account__captions">
                        <p className="account__caption">Редактировать</p>
                        <p className="account__caption">Выйти из аккаунта</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
