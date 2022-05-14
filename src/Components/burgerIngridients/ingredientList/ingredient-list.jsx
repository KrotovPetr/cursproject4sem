import React, { useState } from "react";
import constructBurger from "../goods.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyle from "./ingredient-list.module.css";
import PropTypes from "prop-types";

const IngredientList = (props) => {
  return (
    <div className={cardStyle.cardArea}>
      {props.compList.map(
        (cards, index) =>
          props.typeOfMeal === cards.type && (
            <div key={index}>
              <div
                className={cardStyle.card}
                onClick={(e) => {
                  props.setData(cards);
                  props.turnOn();
                }}
              >
                {cards.count !== 0 && (
                  <Counter count={cards.count} size="default" />
                )}
                <img
                  alt="Фото товара"
                  src={cards.image}
                  className={cardStyle.cardImage}
                />
                <div className={constructBurger.price}>
                  <p className={cardStyle.headerText}>{cards.price}</p>
                  <p className={cardStyle.headerText}>&#x20bd;</p>
                </div>
                <p className={cardStyle.headerText}>{cards.name}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

// Передаются
// typeOfMeal
// compList
// turnOn
// setData
// IngredientList.propTypes = {
//   typeOfMeal: PropTypes.string.isRequired,
//   compList: PropTypes.arrayOf(PropTypes.object).isRequired,
//   turnOn: PropTypes.func.isRequired,
//   setData: PropTypes.func.isRequired,
// };

export default IngredientList;
