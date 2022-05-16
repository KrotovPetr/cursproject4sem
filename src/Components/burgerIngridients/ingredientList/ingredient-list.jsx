import React, { useState } from "react";
import constructBurger from "../goods.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyle from "./ingredient-list.module.css";
import { setActive, setData } from "../../../Services/Actions/actions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const IngredientList = (props) => {
  const dispatch = useDispatch();
  const { data } = useSelector(
    (store) => ({
      data: store.component.data,
    }),
    shallowEqual
  );
  return (
    <div className={cardStyle.cardArea}>
      {data.map(
        (cards, index) =>
          props.typeOfMeal === cards.type && (
            <div key={index}>
              <div
                className={cardStyle.card}
                onClick={(e) => {
                  dispatch(setData(cards));
                  dispatch(setActive(true));
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
