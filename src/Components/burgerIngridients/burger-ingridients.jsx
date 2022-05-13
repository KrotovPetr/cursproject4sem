import React, { useEffect, useState } from "react";
import ingredientsBurger from "./ingridients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientList from "./ingredientList/ingredient-list";
import appStyles from "../app/app.module.css";
import Modal from "../modal/modal";
import PropTypes from "prop-types";
import IngredientDetails from "../ingredientDetails/ingredient-details";

const BurgerIngridients = (props) => {
  const [current, setCurrent] = useState("one");
  const [data, setData] = useState(null);
  const [isActive, setActive] = useState(false);
  const turnOff = () => {
    setActive(false);
  };
  const turnOn = () => {
    setActive(true);
  };
  return (
    <div className={ingredientsBurger.constructor}>
      <h1 className={ingredientsBurger.appText}>Соберите заказ</h1>
      <div className={ingredientsBurger.tabArea}>
        <div className={ingredientsBurger.tabDiv} onClick={setCurrent}>
          Инструменты
        </div>

        <div className={ingredientsBurger.tabDiv} onClick={setCurrent}>
          Расходники
        </div>

        <div className={ingredientsBurger.tabDiv} onClick={setCurrent}>
          ГСМ
        </div>
      </div>
      <section className={ingredientsBurger.menu}>
        {isActive && (
          <Modal turnOff={turnOff} title={"Характеристики товара"}>
            <IngredientDetails data={data} />
          </Modal>
        )}

        <section>
          <p className={ingredientsBurger.headerText}>Инструменты</p>
          <div className={ingredientsBurger.cardList}>
            <IngredientList
              typeOfMeal="instrument"
              compList={props.compList}
              turnOn={turnOn}
              setData={setData}
            />
          </div>
        </section>
        <section>
          <p className={ingredientsBurger.headerText}>Расходники</p>
          <div className={ingredientsBurger.cardList}>
            <IngredientList
              typeOfMeal="component"
              compList={props.compList}
              turnOn={turnOn}
              setData={setData}
            />
          </div>
        </section>
        <section>
          <p className={ingredientsBurger.headerText}>ГСМ</p>
          <div className={ingredientsBurger.cardList}>
            <IngredientList
              typeOfMeal="oil"
              compList={props.compList}
              turnOn={turnOn}
              setData={setData}
            />
          </div>
        </section>
      </section>
    </div>
  );
};

// // Передаётся массив данных
// Ingridients.propTypes = {
//   compList: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default BurgerIngridients;
