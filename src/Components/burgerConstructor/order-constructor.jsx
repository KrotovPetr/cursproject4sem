import React, { useContext, useEffect, useState } from "react";
import constStyles from "./order-constructor.module.css";
import {
  Button,
  DeleteIcon,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import { AppContext } from "../../Services/appContext";
import OrderDetails from "../orderDetails/order-details";

const OrderConstructor = () => {
  function changeOrder(index) {
    appData.setComponent([
      ...appData.compArr.slice(0, index),
      ...appData.compArr.slice(index + 1, appData.compArr.length),
    ]);
  }
  const [numberOfOrder, setOrder] = useState(0);

  const openOrder = () => {
    setOrder(
      Math.floor(Math.random() * 10000) + Math.floor(Math.random() * 10000)
    );
    turnOn();
  };
  //подвязка к контексту
  const appData = useContext(AppContext);

  //состояние модального окна
  const [isActive, setActive] = useState(false);

  //выключение модального окна
  const turnOff = () => {
    setActive(false);
  };

  //включение модального окна
  const turnOn = () => {
    setActive(true);
  };

  function clearInfo() {
    appData.setComponent([]);
  }

  return (
    <div className={constStyles.area}>
      <div className={constStyles.orderArea}>
        <div className={constStyles.order}>
          {/*Блок формирования центральной части бургера*/}
          {isActive && (
            <Modal turnOff={turnOff} clearInfo={clearInfo}>
              <OrderDetails
                turnOff={turnOff}
                clearInfo={clearInfo}
                numberOfOrder={numberOfOrder}
                compArr={appData.compArr}
                totalPrice={appData.totalPrice}
              />
            </Modal>
          )}
          {appData.compArr.length > 0 &&
            appData.compArr.map((cards, index) => (
              <div className={constStyles.position} key={index}>
                <div className={constStyles.dragClass}>
                  <DragIcon type="secondary" />
                </div>
                <div className={constStyles.posBlock}>
                  <img
                    src={cards.image}
                    width="80px"
                    height="40px"
                    className={constStyles.photoBlock}
                  />

                  <p className={constStyles.headerText}>{cards.name}</p>
                  <div onClick={(e) => changeOrder(index)}>
                    <DeleteIcon type="secondary" />
                  </div>
                </div>
              </div>
            ))}
          {/*Конец блока части формирования центральной части*/}
        </div>
        {/*Блок цены*/}
        <div className={constStyles.price}>
          <div className={constStyles.priceArea}>
            <p className={constStyles.ruble}>{appData.totalPrice}</p>
            <p className={constStyles.ruble}>&#x20bd;</p>
          </div>
          <div className={constStyles.buttonDiv}>
            <button onClick={openOrder} disabled={appData.compArr.length === 0}>
              Оформить заказ
            </button>
          </div>
        </div>
        {/*Конец блока цены*/}
      </div>
    </div>
  );
};

//propTypes - нету

export default OrderConstructor;
