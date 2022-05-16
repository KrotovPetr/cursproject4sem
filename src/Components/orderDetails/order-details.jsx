import React, { useState } from "react";
import orderStyles from "./order-details.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { clearInfo, setActive } from "../../Services/Actions/actions";

const OrderDetails = (props) => {
  const dispatch = useDispatch();
  const { number } = useSelector(
    (store) => ({ number: store.component.number }),
    shallowEqual
  );
  return (
    <div className={orderStyles.main}>
      <h2 className={orderStyles.headDig}>{number}</h2>
      <p className={orderStyles.ident}>идентификатор заказа</p>
      <div className={orderStyles.done}>
        <div className={orderStyles.doneMini}>
          <div className={orderStyles.doneDiv}>
            <CheckMarkIcon type="primary" />
          </div>
        </div>
      </div>
      <div className={orderStyles.descr}>
        <p className={orderStyles.text}>Ваш заказ зарегистрирован</p>
        <p className={orderStyles.text}>
          Заберите его из магазина в ближайшие 5 дней
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;
