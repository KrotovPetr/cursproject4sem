import React from "react";
import perStyles from "./perAcc.module.css";
const PerAcc = () => {
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
        <p> У ВАС ПОКА НЕТ ЗАКАЗОВ! </p>
      </div>
    </div>
  );
};

export default PerAcc;
