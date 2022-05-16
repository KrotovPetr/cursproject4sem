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
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeOrder, setActive } from "../../Services/Actions/actions";
import {
  ORDER_URL_ERROR,
  ORDER_URL_REQUEST,
  ORDER_URL_SUCCESS,
  SET_NUMBER,
} from "../../Services/Reducers/components";

const OrderConstructor = () => {
  const dispatch = useDispatch();
  const {
    isActive,
    orderInfo,
    data,
    accessToken,
    valueLogin,
    orderSuccess,
    number,
  } = useSelector(
    (store) => ({
      data: store.component.data,
      isActive: store.component.isActiv,
      orderInfo: store.component.orderInfo,
      accessToken: store.component.accessToken,
      valueLogin: store.component.valueLogin,
      orderSuccess: store.component.orderSuccess,
      number: store.component.number,
    }),
    shallowEqual
  );

  const sendOrder = () => {
    const ingredients = [...orderInfo];
    const ingredientIds = ingredients.map((ingredient) => ingredient.id);
    const number =
      Math.floor(Math.random() * 10000) + Math.floor(Math.random() * 10000);
    dispatch({
      type: SET_NUMBER,
      data: number,
    });
    //запрос
    number !== -1 &&
      dispatch({
        type: ORDER_URL_REQUEST,
      });
    fetch("/order", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        price: appData.totalPrice,
        email: valueLogin,
        components: JSON.stringify(ingredientIds),
        number: number,
      }),
    })
      .then((res) => {
        if (res.ok) {
          dispatch({
            type: ORDER_URL_SUCCESS,
          });
          return res.json();
        } else {
          dispatch({
            type: ORDER_URL_ERROR,
          });
          return Promise.reject(`Ошибка ${res.status}`);
        }
      })
      .catch((e) => console.error(e));
    dispatch(setActive(true));
  };

  //подвязка к контексту
  const appData = useContext(AppContext);

  return (
    <div className={constStyles.area}>
      <div className={constStyles.orderArea}>
        <div className={constStyles.order}>
          {isActive && orderSuccess && number !== -1 && (
            <Modal>
              <OrderDetails />
            </Modal>
          )}
          {orderInfo.length > 0 &&
            orderInfo.map((cards, index) => (
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
                  <div onClick={(e) => dispatch(changeOrder(index, data))}>
                    <DeleteIcon type="secondary" />
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className={constStyles.price}>
          <div className={constStyles.priceArea}>
            <p className={constStyles.ruble}>{appData.totalPrice}</p>
            <p className={constStyles.ruble}>&#x20bd;</p>
          </div>
          <div className={constStyles.buttonDiv}>
            <button onClick={sendOrder} disabled={orderInfo.length === 0}>
              Оформить заказ
            </button>
          </div>
        </div>
        {/*Конец блока цены*/}
      </div>
    </div>
  );
};

export default OrderConstructor;
