import React, { useEffect, useMemo, useReducer, useState } from "react";
import Header from "../header/header";
import BurgerIngridients from "../burgerIngridients/burger-ingridients";
import appStyles from "./app.module.css";
import OrderConstructor from "../burgerConstructor/order-constructor";
import { AppContext } from "../../Services/appContext";
import Data from "../../utils/data";

const App = () => {
  // ccылка
  const refURL = "https://norma.nomoreparties.space/api/ingredients";

  //массив всех компонентов
  const [state, setState] = useState([]);

  //состояние заказа
  const [components, setComponents] = useState([]);

  //внесение изменений в заказ
  const changeOrder = (card) => {
    setComponents([...components, card]);
  };

  //подсчёт итоговой суммы
  const totalPrice = useMemo(() => {
    if (components.length === 0) {
      return 0;
    } else {
      let price = 0;
      components.map((ingredient) => {
        price += ingredient.price;
      });
      return price;
    }
  }, [components]);

  //взаимодействие с контекстом
  const user = useMemo(() => {
    const obj = {
      compArr: components,
      totalPrice: totalPrice,
      setOrder: changeOrder,
      setComponent: setComponents,
    };
    return obj;
  }, [components]);

  const data = Data();
  //fetch запрос при отрисовке
  useEffect(() => {
    fetchData();
    // setState(data.cards);
  }, []);

  // функция получения json
  const fetchData = () => {
    fetch("/components", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка ${res.status}`);
        }
      })
      .then((data) => setState(data))
      .catch((e) => console.error(e));
  };

  return (
    <>
      <div className={appStyles.page}>
        <main className={appStyles.main}>
          <AppContext.Provider value={user}>
            <BurgerIngridients
              className={appStyles.burgerIngredients}
              compList={state.length > 0 ? state : []}
            />
            <OrderConstructor />
          </AppContext.Provider>
        </main>
      </div>
    </>
  );
};

export default App;
