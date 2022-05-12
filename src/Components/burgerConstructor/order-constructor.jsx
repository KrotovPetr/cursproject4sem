import React, { useContext, useState } from "react";
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
import ingredientsBurger from "../burgerIngridients/ingridients.module.css";

const OrderConstructor = () => {
  //подвязка к контексту
  const appData = useContext(AppContext);
  const fetchURL = "https://norma.nomoreparties.space/api/orders";
  //состояние под ответ
  const [orderInfo, setOrderInfo] = useState(null);
  //функция составления массива
  const getOrder = () => {
    // const ingredients = [appData.buns, ...appData.compArr, appData.buns];
    // const ingredientIds = ingredients.map((ingredient) => ingredient._id);
    //
    // //запрос
    // fetch("/order", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify({ ingredients: ingredientIds }),
    // })
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();
    //     } else {
    //       return Promise.reject(`Ошибка ${res.status}`);
    //     }
    //   })
    //   .then((data) => setOrderInfo(data))
    //   .catch((e) => console.error(e));

    //включение модалки
    turnOn();
  };

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

  return (
    <div className={constStyles.area}>
      <div className={constStyles.orderArea}>
        <div className={constStyles.order}>
          {/*Блок формирования центральной части бургера*/}
          {isActive && (
            <Modal turnOff={turnOff}>
              <OrderDetails />
            </Modal>
          )}
          {appData.compArr.length > 0 &&
            appData.compArr.map(
              (cards) =>
                cards.type !== "bun" && (
                  <div className={constStyles.position} key={cards["_id"]}>
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
                      <DeleteIcon type="secondary" />
                    </div>
                  </div>
                )
            )}
          {/*Конец блока части формирования центральной части*/}
        </div>
        {/*Блок цены*/}
        <div className={constStyles.price}>
          <div className={constStyles.priceArea}>
            <p className="text text_type_digits-medium text_color_inactive">
              {appData.totalPrice}
            </p>
            <CurrencyIcon type="secondary" />
          </div>
          <div className={constStyles.buttonDiv}>
            <Button
              type="primary"
              size="large"
              onClick={getOrder}
              disabled={appData.compArr.length === 0}
            >
              Оформить заказ
            </Button>
          </div>
        </div>
        {/*Конец блока цены*/}
      </div>
    </div>
  );
};

//propTypes - нету

export default OrderConstructor;
