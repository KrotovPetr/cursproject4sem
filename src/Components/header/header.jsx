import React from 'react';
import HeaderStyles from "./header.module.css";
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
const Header = () => {
    return (
        <div className={HeaderStyles.top}>
            <header className={HeaderStyles.header}>

                {/*зона левых кнопок*/}
                <div className={HeaderStyles.btnArea}>
                    <div className={HeaderStyles.constructor}>
                        <p className={HeaderStyles.headerText}>Конструктор</p>
                    </div>
                    <div className={HeaderStyles.orderList}>
                       <p className={HeaderStyles.headerText}>Меню</p>
                    </div>
                </div>

                {/*лого*/}
                <div className={HeaderStyles.logo}>
                    <img src="https://st2.depositphotos.com/3259223/8297/v/950/depositphotos_82975982-stock-illustration-hand-holding-a-wrench-vector.jpg" alt={"лого"} width="50px" height="50px"/>
                    <h1 className={HeaderStyles.headerLogoText}>САМОДЕЛКИН</h1>
                </div>

                {/*зона правых кнопок*/}
                <div className={HeaderStyles.personalAccount}>
                    <img src="http://cdn.onlinewebfonts.com/svg/img_519969.png" alt={"кабинет"} width="30px" height="30px" />
                    <p className={HeaderStyles.headerText}>Личный кабинет</p>
                </div>
            </header>
        </div>
    );
};

export default Header;