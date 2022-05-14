import React, { useState } from "react";
import style from "./registration.module.css";
import formStyles from "./registration.module.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router";
const Registration = (props) => {
  const [valueLogin, setLogin] = useState("");
  const [valuePassword, setPassword] = useState("");
  const [valueSurname, setSurname] = useState("");
  const [valueName, setName] = useState("");

  // Обработчик изменения поля ввода обновляет состояние
  function handleLogin(e) {
    setLogin(e.target.value);
  }

  // Обработчик изменения поля ввода обновляет состояние
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  // Обработчик изменения поля ввода обновляет состояние
  function handleSurname(e) {
    setSurname(e.target.value);
  }

  // Обработчик изменения поля ввода обновляет состояние
  function handleName(e) {
    setName(e.target.value);
  }

  function addUser() {
    fetch("/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: valueLogin,
        password: valuePassword,
        first_name: valueSurname,
        last_name: valueName,
      }),
    })
      .then((result) => {
        if (result.ok) {
          return result.json();
        } else {
          return Promise.reject(`Ошибка ${result.status}`);
        }
      })
      .then((result) => {})
      .catch((e) => console.error(e));
  }

  return (
    <div className={formStyles.field}>
      <div className={formStyles.formArea}>
        <h1>Registration</h1>
        <div className={formStyles.inputContainer}>
          <p>Email</p>
          <input
            type="text"
            size="40"
            value={valueLogin}
            onChange={handleLogin}
          />
        </div>
        <div className={formStyles.inputContainer}>
          <p>Пароль</p>
          <input
            type="password"
            size="40"
            value={valuePassword}
            onChange={handlePassword}
          />
        </div>
        <div className={formStyles.inputContainer}>
          <p>Фамилия</p>
          <input
            type="text"
            size="40"
            value={valueSurname}
            onChange={handleSurname}
          />
        </div>
        <div className={formStyles.inputContainer}>
          <p>Имя</p>
          <input
            type="text"
            size="40"
            value={valueName}
            onChange={handleName}
          />
        </div>

        <button
          onClick={(e) => {
            // console.log(
            //   valueSurname +
            //     "  " +
            //     valueName +
            //     " " +
            //     valuePassword +
            //     "  " +
            //     valueLogin
            // );
            addUser();
          }}
        >
          <Link className={formStyles.text} to="/login">
            Go!
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Registration;
