import React, { useEffect, useState } from "react";
import goodsStyle from "./goods.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientList from "./ingredientList/ingredient-list";
import Modal from "../modal/modal";
import PropTypes from "prop-types";
import IngredientDetails from "../ingredientDetails/ingredient-details";

const Goods = (props) => {
  const [current, setCurrent] = useState("one");
  const [data, setData] = useState(null);
  const [isActive, setActive] = useState(false);
  const turnOff = () => {
    setActive(false);
  };

  function clearInfo() {}

  const turnOn = () => {
    setActive(true);
  };
  return (
    <div className={goodsStyle.constructor}>
      <h1 className={goodsStyle.appText}>Соберите заказ</h1>
      <div className={goodsStyle.tabArea}>
        <div className={goodsStyle.tabDiv} onClick={setCurrent}>
          Инструменты
        </div>

        <div className={goodsStyle.tabDiv} onClick={setCurrent}>
          Расходники
        </div>

        <div className={goodsStyle.tabDiv} onClick={setCurrent}>
          ГСМ
        </div>
      </div>
      <section className={goodsStyle.menu}>
        {isActive && (
          <Modal
            turnOff={turnOff}
            clearInfo={clearInfo}
            title={"Характеристики товара"}
          >
            <IngredientDetails data={data} />
          </Modal>
        )}

        <section>
          <p className={goodsStyle.headerText}>Инструменты</p>
          <div className={goodsStyle.cardList}>
            <IngredientList
              typeOfMeal="instrument"
              compList={props.compList}
              turnOn={turnOn}
              setData={setData}
            />
          </div>
        </section>
        <section>
          <p className={goodsStyle.headerText}>Расходники</p>
          <div className={goodsStyle.cardList}>
            <IngredientList
              typeOfMeal="component"
              compList={props.compList}
              turnOn={turnOn}
              setData={setData}
            />
          </div>
        </section>
        <section>
          <p className={goodsStyle.headerText}>ГСМ</p>
          <div className={goodsStyle.cardList}>
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

// Передаётся массив данных
Goods.propTypes = {
  compList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Goods;
