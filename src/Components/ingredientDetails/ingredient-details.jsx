import React, { useContext, useEffect } from "react";
import ingredientStyles from "./ingredient-styles.module.css";
import PropTypes from "prop-types";
import { AppContext } from "../../Services/appContext";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientDetails = (props) => {
  const app = useContext(AppContext);
  const createOrder = () => {
    app.setOrder(props.data);
  };
  return (
    <div className={ingredientStyles.main}>
      {/*блок с картинкой*/}
      <img
        src={props.data.image}
        alt={props.data.name}
        className={ingredientStyles.imageDiv}
      />

      {/*описание ингридиента*/}
      <h2 className={ingredientStyles.headerText}>{props.data.name}</h2>
      <div className={ingredientStyles.descriptionDiv}>
        <div className={ingredientStyles.subDescription}>
          <p className={ingredientStyles.appText}>Производитель</p>
          <p className={ingredientStyles.appText}>{props.data.company}</p>
        </div>
        <div className={ingredientStyles.subDescription}>
          <p className={ingredientStyles.appText}>Количество</p>
          <p className={ingredientStyles.appText}>{props.data.amount}</p>
        </div>
        <div className={ingredientStyles.subDescription}>
          <p className={ingredientStyles.appText}>Стоимость</p>
          <p className={ingredientStyles.appText}>{props.data.price}</p>
        </div>
        <div className={ingredientStyles.subDescription}>
          <p className={ingredientStyles.appText}>Вес</p>
          <p className={ingredientStyles.appText}>{props.data.weight}</p>
        </div>
      </div>
      <Button onClick={createOrder} type="primary" size="small">
        Добавить
      </Button>
    </div>
  );
};

IngredientDetails.propTypes = {
  data: PropTypes.object.isRequired,
};
export default IngredientDetails;
