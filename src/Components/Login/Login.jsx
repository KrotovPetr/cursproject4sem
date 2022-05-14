import React from "react";
import { Link } from "react-router-dom";
import Registration from "../Registration/Registration";
import App from "../app/app";
import formStyles from "./login.module.css";
const Login = () => {
  const [valueLogin, setValueLogin] = React.useState("");
  // Обработчик изменения поля ввода обновляет состояние
  function handleChange(e) {
    setValueLogin(e.target.value);
  }

  const [valuePassword, setValuePassword] = React.useState("");

  // Обработчик изменения поля ввода обновляет состояние
  function handleChange2(e) {
    setValuePassword(e.target.value);
  }

  // function checkUser() {
  //   fetch("/users", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     // body: JSON.stringify({ login: valueLogin, password: valuePassword }),
  //   })
  //     .then((result) => {
  //       if (result.ok) {
  //         return result.json();
  //       } else {
  //         return Promise.reject(`Ошибка ${result.status}`);
  //       }
  //     })
  //     .then((result) => {})
  //     .catch((e) => console.error(e));
  // }

  return (
    <div className={formStyles.field}>
      <div className={formStyles.formArea}>
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
        <Link className={formStyles.regText} to="/registration">
          Регистрация
        </Link>
        <button
          onClick={(e) => {
            // checkUser();
          }}
        >
          <Link className={formStyles.text} to="/perAcc">
            Go!
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
