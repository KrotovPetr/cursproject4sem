import React, { useEffect, useState } from "react";
import perStyles from "./perAcc.module.css";
import { shallowEqual, useSelector } from "react-redux";

const PerAcc = () => {
  const [orders, setOrders] = useState([]);
  const { accessToken, valueLogin } = useSelector(
    (store) => ({
      accessToken: store.component.accessToken,
      valueLogin: store.component.valueLogin,
    }),
    shallowEqual
  );

  const getOrder = () => {
    fetch("/order", {
      method: "GET",

      headers: {
        Authorization: "Bearer " + accessToken,
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
      .then((data) => setOrders(data))
      .catch((e) => console.error(e));
  };

  const deleteOrder = (id) => {
    fetch("/order/" + id, {
      method: "DELETE",

      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    getOrder();
  };

  useEffect(() => {
    getOrder();
  }, []);
  return (
    <div className={perStyles.mainPage}>
      {accessToken ? (
        <div className={perStyles.page}>
          <div className={perStyles.info}>
            <div className={perStyles.infoPic}>
              <img
                src="https://avatars.mds.yandex.net/i?id=a211704913de34967e4bd7367e18679b-5876270-images-thumbs&ref=rim&n=33&w=150&h=150"
                alt="Person"
              />
            </div>
            <div className={perStyles.infoData}>
              <p className={perStyles.infoText}>Имя: {valueLogin}</p>
            </div>
          </div>
          <div className={perStyles.orders}>
            {orders.length === 0 ? (
              <p> У ВАС ПОКА НЕТ ЗАКАЗОВ! </p>
            ) : (
              <div className={perStyles.orderData}>
                {orders.map((cards, index) => (
                  <div key={index} className={perStyles.card}>
                    <p className={perStyles.numberText}>{cards.number}</p>
                    <p className={perStyles.priceText}>{cards.price}&#x20bd;</p>
                    <p
                      className={perStyles.infoText}
                      onClick={(e) => deleteOrder(cards.id)}
                    >
                      Удалить
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PerAcc;
