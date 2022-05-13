import React, { useEffect, useState } from "react";
import perStyles from "./perAcc.module.css";
const PerAcc = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("/order", {
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
      .then((data) => setOrders(data))
      .catch((e) => console.error(e));
  }, []);
  return (
    <div className={perStyles.page}>
      <div className={perStyles.info}>
        <div className={perStyles.infoPic}>
          <img
            src="https://avatars.mds.yandex.net/i?id=a211704913de34967e4bd7367e18679b-5876270-images-thumbs&ref=rim&n=33&w=150&h=150"
            alt="Person"
          />
        </div>
        <div className={perStyles.infoData}>
          <p>Имя: Peter</p>
          <p>Фамилия: Krotov</p>
          <p>Email: user@mail.ru</p>
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PerAcc;
