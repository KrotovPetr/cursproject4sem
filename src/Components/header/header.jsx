import React from "react";
import HeaderStyles from "./header.module.css";
import { Link } from "react-router-dom";
import App from "../app/app";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
const Header = () => {
  return (
    <div className={HeaderStyles.top}>
      <header className={HeaderStyles.header}>
        {/*зона левых кнопок*/}
        <div className={HeaderStyles.btnArea}>
          <div className={HeaderStyles.constructor}>
            <Link to="/login" className={HeaderStyles.headerText}>
              Войти
            </Link>
          </div>
          <div className={HeaderStyles.orderList}>
            <Link to="/home" className={HeaderStyles.headerText}>
              Меню
            </Link>
          </div>
        </div>

        {/*лого*/}
        <div className={HeaderStyles.logo}>
          <img
            src="https://st2.depositphotos.com/3259223/8297/v/950/depositphotos_82975982-stock-illustration-hand-holding-a-wrench-vector.jpg"
            alt={"лого"}
            width="50px"
            height="50px"
          />
          <h1 className={HeaderStyles.headerLogoText}>САМОДЕЛКИН</h1>
        </div>

        {/*зона правых кнопок*/}
        <div className={HeaderStyles.personalAccount}>
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_519969.png"
            alt={"кабинет"}
            width="30px"
            height="30px"
          />
          <Link to="/perAcc" className={HeaderStyles.headerText}>
            Личный кабинет
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
