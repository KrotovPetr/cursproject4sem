import React, { useEffect, useMemo, useReducer, useState } from "react";
import Header from "../header/header";
import BurgerIngridients from "../burgerIngridients/burger-ingridients";
import appStyles from "./app.module.css";
import OrderConstructor from "../burgerConstructor/order-constructor";
import { AppContext } from "../../Services/appContext";
import Data from "../../utils/data";
// функция записи в состояния
const reducer = (order, action) => {
  switch (action.type) {
    case "addBun":
      return order.buns
        ? {
            ...order,
            buns: action.data,
            totalPrice:
              order.totalPrice + 2 * action.data.price - 2 * order.buns.price,
          }
        : {
            ...order,
            buns: action.data,
            totalPrice: order.totalPrice + 2 * action.data.price,
          };
    case "addIngredient":
      return {
        ...order,
        components: [...order.components, action.data],
        totalPrice: order.totalPrice + action.data.price,
      };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
};

const App = () => {
  // ccылка
  const refURL = "https://norma.nomoreparties.space/api/ingredients";

  //массив всех компонентов
  const [state, setState] = useState([]);

  //состояние заказа
  const [order, dispatch] = useReducer(reducer, {
    buns: null,
    components: [],
  });

  //внесение изменений в заказ
  const changeOrder = (card) => {
    card && card.type === "bun"
      ? dispatch({ type: "addBun", data: card })
      : dispatch({ type: "addIngredient", data: card });
  };

  //подсчёт итоговой суммы
  const totalPrice = useMemo(() => {
    if (order.buns) {
      if (order.components.length === 0) {
        return order.buns.price * 2;
      } else {
        let price = 2 * order.buns.price;
        order.components.map((ingredient) => {
          price += ingredient.price;
        });
        return price;
      }
    } else {
      return 0;
    }
  }, [order]);

  //взаимодействие с контекстом
  const user = useMemo(() => {
    const obj = {
      buns: order.buns,
      compArr: order.components,
      totalPrice: totalPrice,
      setOrder: changeOrder,
    };

    return obj;
  }, [order, totalPrice]);

  const data = Data();
  //fetch запрос при отрисовке
  useEffect(() => {
    fetchData();
    setState(data.cards);
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
      .then((data) => console.log(data))
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
