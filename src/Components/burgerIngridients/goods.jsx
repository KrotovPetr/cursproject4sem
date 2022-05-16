import React, { useEffect, useState } from "react";
import goodsStyle from "./goods.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientList from "./ingredientList/ingredient-list";
import Modal from "../modal/modal";
import PropTypes from "prop-types";
import IngredientDetails from "../ingredientDetails/ingredient-details";
import { shallowEqual, useSelector } from "react-redux";

const Goods = () => {
  const { isActive, cardData, data, number } = useSelector(
    (store) => ({
      data: store.component.data,
      isActive: store.component.isActiv,
      cardData: store.component.cardData,
      number: store.component.number,
    }),
    shallowEqual
  );

  return (
    <div className={goodsStyle.constructor}>
      <h1 className={goodsStyle.appText}>Соберите заказ</h1>
      <div className={goodsStyle.tabArea}>
        <div className={goodsStyle.tabDiv}>Инструменты</div>

        <div className={goodsStyle.tabDiv}>Расходники</div>

        <div className={goodsStyle.tabDiv}>ГСМ</div>
      </div>
      <section className={goodsStyle.menu}>
        {isActive && cardData && number === -1 && (
          <Modal title={"Характеристики товара"}>
            <IngredientDetails />
          </Modal>
        )}

        <section>
          <p className={goodsStyle.headerText}>Инструменты</p>
          <div className={goodsStyle.cardList}>
            <IngredientList typeOfMeal="instrument" compList={data} />
          </div>
        </section>
        <section>
          <p className={goodsStyle.headerText}>Расходники</p>
          <div className={goodsStyle.cardList}>
            <IngredientList typeOfMeal="component" compList={data} />
          </div>
        </section>
        <section>
          <p className={goodsStyle.headerText}>ГСМ</p>
          <div className={goodsStyle.cardList}>
            <IngredientList typeOfMeal="oil" compList={data} />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Goods;
