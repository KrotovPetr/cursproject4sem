import React from "react";
import { Link } from "react-router-dom";
import formStyles from "./login.module.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { setInfo, setLogin } from "../../Services/Actions/actions";
import {
  LOGIN_URL_ERROR,
  LOGIN_URL_REQUEST,
  LOGIN_URL_SUCCESS,
} from "../../Services/Reducers/components";

const Login = () => {
  const { accessToken, refreshToken, loginSuccess } = useSelector(
    (store) => ({
      accessToken: store.component.accessToken,
      refreshToken: store.component.refreshToken,
      loginSuccess: store.component.loginSuccess,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  // Состояния логина и пароля
  const [valueLogin, setValueLogin] = React.useState("");
  const [valuePassword, setValuePassword] = React.useState("");

  // Обработчик изменения поля ввода обновляет состояние
  function handleChange(e) {
    setValueLogin(e.target.value);
  }

  // Обработчик изменения поля ввода обновляет состояние
  function handleChange2(e) {
    setValuePassword(e.target.value);
  }

  function checkUser() {
    dispatch({
      type: LOGIN_URL_REQUEST,
    });
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ login: valueLogin, password: valuePassword }),
    })
      .then((result) => {
        if (result.ok) {
          return result.json();
        } else {
          dispatch({ type: LOGIN_URL_ERROR });
          return Promise.reject(`Ошибка ${result.status}`);
        }
      })
      .then((result) => {
        dispatch(setInfo(result.accessToken, result.refreshToken));
        dispatch(setLogin(valueLogin));
        dispatch({
          type: LOGIN_URL_SUCCESS,
          data: result.data,
        });
      })
      .catch((e) => console.error(e));
  }

  return (
    <div className={formStyles.field}>
      <div className={formStyles.formArea}>
        {!loginSuccess ? (
          <div className={formStyles.inputs}>
            <h1>Login</h1>
            <div className={formStyles.inputContainer}>
              <p>Логин</p>
              <input
                type="text"
                size="40"
                value={valueLogin}
                onChange={handleChange}
              />
            </div>
            <div className={formStyles.inputContainer}>
              <p>Пароль</p>
              <input
                type="password"
                size="40"
                value={valuePassword}
                onChange={handleChange2}
              />
            </div>
          </div>
        ) : (
          <div className={formStyles.inputsSuccess}>
            <p className={formStyles.text}>Вы успешно авторизовались!</p>
            <div className={formStyles.done}>
              <div className={formStyles.doneMini}>
                <div className={formStyles.doneDiv}>
                  <CheckMarkIcon type="primary" />
                </div>
              </div>
            </div>
            <Link to="/home">
              <p className={formStyles.text}>Домой!</p>
            </Link>
          </div>
        )}

        {!loginSuccess && <button onClick={checkUser}> Авторизоваться </button>}
      </div>
    </div>
  );
};

export default Login;
