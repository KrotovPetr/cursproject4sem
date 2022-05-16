import React from "react";
import overlayStyles from "./modal-overlay.module.css";
import PropTypes from "prop-types";
import { setActive } from "../../Services/Actions/actions";
import { useDispatch } from "react-redux";

const ModalOverlay = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={overlayStyles.modalActive}
      onClick={(e) => dispatch(setActive(false))}
    />
  );
};

export default ModalOverlay;
