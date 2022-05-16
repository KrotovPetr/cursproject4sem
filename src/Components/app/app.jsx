import React, { useEffect, useMemo, useReducer, useState } from "react";
import Header from "../header/header";
import Goods from "../burgerIngridients/goods";
import appStyles from "./app.module.css";
import OrderConstructor from "../burgerConstructor/order-constructor";
import { AppContext } from "../../Services/appContext";
import Data from "../../utils/data";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Services/Actions/actions";

const App = () => {
  const { data, accessToken, orderInfo } = useSelector(
    (store) => ({
      data: store.component.data,
      accessToken: store.component.accessToken,
      orderInfo: store.component.orderInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  //подсчёт итоговой суммы
  const totalPrice = useMemo(() => {
    if (orderInfo.length === 0) {
      return 0;
    } else {
      let price = 0;
      orderInfo.map((ingredient) => {
        price += ingredient.price;
      });
      return price;
    }
  }, [orderInfo]);

  //взаимодействие с контекстом
  const user = useMemo(() => {
    const obj = {
      compArr: orderInfo,
      totalPrice: totalPrice,
    };
    return obj;
  }, [orderInfo]);

  //fetch запрос при отрисовке
  useEffect(() => {
    dispatch(fetchData(accessToken));
  }, []);

  return (
    <>
      <div className={appStyles.page}>
        <main className={appStyles.main}>
          <AppContext.Provider value={user}>
            <Goods
              className={appStyles.burgerIngredients}
              compList={data.length > 0 ? data : []}
            />
            <OrderConstructor />
          </AppContext.Provider>
        </main>
      </div>
    </>
  );
};

export default App;
