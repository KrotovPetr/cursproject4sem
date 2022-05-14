import React, { useState } from "react";
import orderStyles from "./order-details.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const OrderDetails = (props) => {
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const sendOrder = () => {
    const ingredients = [...props.compArr];
    const ingredientIds = ingredients.map((ingredient) => ingredient.id);

    //запрос
    fetch("/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        price: props.totalPrice,
        email: email,
        components: JSON.stringify(ingredientIds),
        number: props.numberOfOrder,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка ${res.status}`);
        }
      })
      .catch((e) => console.error(e));

    props.turnOff();
    props.clearInfo();
  };

  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className={orderStyles.main}>
      <h2 className={orderStyles.headDig}>{props.numberOfOrder}</h2>
      <p className={orderStyles.ident + " text text_type_main-medium"}>
        идентификатор заказа
      </p>

      <div className={orderStyles.inputContainer}>
        <p>Email</p>
        <input type="email" size="40" value={email} onChange={handleChange} />
      </div>

      <button
        onClick={(e) => {
          validateEmail(email) ? sendOrder() : setEmail("");
        }}
      >
        Go!
      </button>
    </div>
  );
};

OrderDetails.propTypes = {
  data: PropTypes.number,
};
export default OrderDetails;
