import React from "react";
import style from "./registration.module.css";
import formStyles from "./registration.module.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router";
const Registration = (props) => {
  const [regState, changeRegState] = React.useState(true);
  const navigate = useNavigate();
  function addUser() {
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      // body: JSON.stringify({ login: valueLogin, password: valuePassword }),
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
          <p>Логин</p>
          <input
            type="text"
            size="40"
            // value={valueLogin}
            // onChange={handleChange}
          />
        </div>
        <div className={formStyles.inputContainer}>
          <p>Пароль</p>
          <input
            type="password"
            size="40"
            // value={valuePassword}
            // onChange={handleChange2}
          />
        </div>
        <div className={formStyles.inputContainer}>
          <p>Фамилия</p>
          <input
            type="password"
            size="40"
            // value={valuePassword}
            // onChange={handleChange2}
          />
        </div>
        <div className={formStyles.inputContainer}>
          <p>Имя</p>
          <input
            type="password"
            size="40"
            // value={valuePassword}
            // onChange={handleChange2}
          />
        </div>

        <button
          onClick={(e) => {
            // checkUser();
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
