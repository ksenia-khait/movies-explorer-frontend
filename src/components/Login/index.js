import React from 'react';
import "./Login.css";
import logo from '../../images/logo.svg';
import {Link} from "react-router-dom";
import useInput from '../../hooks/useInputHook';

const Login = () => {
    const email = useInput('', {isEmpty: true, minLength: 3, maxLength: 30});
    const password = useInput('', {isEmpty: true, minLength: 8, maxLength: 30});
    return (
        <section className="register">
            <div className="register__container">
                <div className="register__form-box">
                    <img className="register__logo" src={logo} alt="Логотип"/>
                    <h2 className="register__title">Рады видеть!</h2>
                    <form className="register__form" name="form" noValidate>
                        <label className="register__lable">E-mail</label>
                        <input
                            value={email.value}
                            onChange={e => email.onChange(e)}
                            onBlur={e => email.onBlur(e)}
                            type="url"
                            className="register__input register__email"
                            name="src"
                            id="email"
                            placeholder="E-mail"
                            required
                        />
                        <span id="email-error" className="error"> {
                            (email.isDirty && email.isEmpty) &&
                            <span className="input-error">Поле не может быть пустым</span> ||
                            (email.isDirty && email.isEmailError) &&
                            <span className="input-error">В поле должен быть email</span> ||
                            (email.isDirty && email.minLengthError) &&
                            <span className="input-error">Поле не может быть меньше 3 символов</span> ||
                            (email.isDirty && email.maxLength) &&
                            <span className="input-error">Поле не может быть более 30 смиволов</span>
                        }</span>

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
                        <span id="password-error" className="error">
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
                        value="Войти"
                    />
                    <div className="register__caption">
                        <p className="register__login-caption">Уже зарегистрированы?&nbsp;</p>
                        <Link className="register__login-link" to='/signup'>Регистрация</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
