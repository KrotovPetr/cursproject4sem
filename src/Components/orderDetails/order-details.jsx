import React from "react";
import orderStyles from "./order-details.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const OrderDetails = (props) => {
  return (
    <div className={orderStyles.main}>
      <h2 className={orderStyles.headDig}>{props.numberOrder}</h2>
      <p className={orderStyles.ident + " text text_type_main-medium"}>
        идентификатор заказа
      </p>
      <div className={orderStyles.done}>
        <div className={orderStyles.doneMini}>
          <div className={orderStyles.doneDiv}>
            <CheckMarkIcon type="primary" />
          </div>
        </div>
      </div>
      <div className={orderStyles.descr}>
        <p className={orderStyles.appText}>Ваш заказ обрабатывается</p>
        <p className={orderStyles.appText}>Дождитесь уведомления, пожалуйста</p>
      </div>
    </div>
  );
};

OrderDetails.propTypes = {
  data: PropTypes.number,
};
export default OrderDetails;
