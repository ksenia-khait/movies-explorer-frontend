import React from 'react';
import {Link} from "react-router-dom";
import './Register.css';
import logo from '../../images/logo.svg';
import useInput from '../../hooks/useInputHook';

const Register = () => {
    const name = useInput('', {isEmpty: true, minLength: 3, maxLength: 30});
    const email = useInput('', {isEmpty: true, minLength: 3, maxLength: 30});
    const password = useInput('', {isEmpty: true, minLength: 8, maxLength: 30});

    return (
        <section className="register">
            <div className="register__container">
                <div className="register__form-box">
                    <img className="register__logo" src={logo} alt="Логотип"/>
                    <h2 className="register__title">Добро пожаловать!</h2>
                    <form className="register__form" name="form" noValidate>
                        <label className="register__lable">Имя</label>
                        <input
                            value={name.value}
                            onChange={e => name.onChange(e)}
                            onBlur={e => name.onBlur(e)}
                            type="text"
                            className="register__input register__name"
                            name="name"
                            id="name"
                            minLength="2"
                            // maxLength="30"
                            placeholder="Имя"
                            required
                        />
                        <span id="name-error" className="error">
                            {
                                (name.isDirty && name.isEmpty) &&
                                <span className="input-error">Поле не может быть пустым</span> ||
                                (name.isDirty && name.minLengthError) &&
                                <span className="input-error">Поле не может быть меньше 3 символов</span> ||
                                (name.isDirty && name.maxLength) &&
                                <span className="input-error">Поле не может быть более 30 смиволов</span>
                            }
                        </span>

                        <label className="register__lable">E-mail</label>
                        <input
                            value={email.value}
                            onChange={email.onChange}
                            onBlur={email.onBlur}
                            type="url"
                            className="register__input register__email"
                            name="src"
                            id="email"
                            placeholder="E-mail"
                            required
                        />
                        <span id="name-error" className="error">
                            {
                                (email.isDirty && email.isEmpty) &&
                                <span className="input-error">Поле не может быть пустым</span> ||
                                (email.isDirty && email.isEmailError) &&
                                <span className="input-error">В поле должен быть email</span> ||
                                (email.isDirty && email.minLengthError) &&
                                <span className="input-error">Поле не может быть меньше 3 символов</span> ||
                                (email.isDirty && email.maxLength) &&
                                <span className="input-error">Поле не может быть более 30 смиволов</span>
                            }
                        </span>
                        <label className="register__lable">Пароль</label>
                        <input
                            value={password.value}
                            onChange={e => password.onChange(e)}
                            onBlur={e => password.onBlur(e)}
                            type="url"
                            className="register__input register__password"
                            name="src"
                            id="password"
                            placeholder="Пароль"
                            required
                        />
                        <span id="name-error" className="error">
                             {
                                 (password.isDirty && password.isEmpty) &&
                                 <span className="input-error">Поле не может быть пустым</span> ||
                                 (password.isDirty && password.minLengthError) &&
                                 <span className="input-error">Поле не может быть меньше 8 символов</span> ||
                                 (password.isDirty && password.maxLength) &&
                                 <span className="input-error">Поле не может быть более 30 смиволов</span>
                             }
                        </span>
                    </form>
                </div>

                <div className="register__form-box">
                    <input
                        type="submit"
                        className="register__button"
                        name="button"
                        value="Зарегистрироваться"
                    />
                    <div className="register__caption">
                        <p className="register__login-caption">Уже зарегистрированы?&nbsp;</p>
                        <Link className="register__login-link" to='/signin'>Войти</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
