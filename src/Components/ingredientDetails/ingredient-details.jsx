import React, { useContext, useEffect } from "react";
import ingredientStyles from "./ingredient-styles.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { addGood, setActive } from "../../Services/Actions/actions";
import { CLEAR_CARD } from "../../Services/Reducers/components";

const IngredientDetails = () => {
  const dispatch = useDispatch();
  const { cardData } = useSelector((store) => ({
    cardData: store.component.cardData,
  }));

  const createOrder = () => {
    dispatch(addGood(cardData));
    dispatch(setActive(false));
    dispatch({ type: CLEAR_CARD });
  };
  return (
    <div className={ingredientStyles.main}>
      {/*блок с картинкой*/}
      <img
        src={cardData.image}
        alt={cardData.name}
        className={ingredientStyles.imageDiv}
      />

      {/*описание ингридиента*/}
      <h2 className={ingredientStyles.headerText}>{cardData.name}</h2>
      <div className={ingredientStyles.descriptionDiv}>
        <div className={ingredientStyles.subDescription}>
          <p className={ingredientStyles.appText}>Производитель</p>
          <p className={ingredientStyles.appText}>{cardData.company}</p>
        </div>
        <div className={ingredientStyles.subDescription}>
          <p className={ingredientStyles.appText}>Количество</p>
          <p className={ingredientStyles.appText}>{cardData.amount}</p>
        </div>
        <div className={ingredientStyles.subDescription}>
          <p className={ingredientStyles.appText}>Стоимость</p>
          <p className={ingredientStyles.appText}>{cardData.price}</p>
        </div>
        <div className={ingredientStyles.subDescription}>
          <p className={ingredientStyles.appText}>Вес</p>
          <p className={ingredientStyles.appText}>{cardData.weight}</p>
        </div>
      </div>
      <Button onClick={createOrder} type="primary" size="small">
        Добавить
      </Button>
    </div>
  );
};

export default IngredientDetails;
