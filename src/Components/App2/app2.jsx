import React from "react";
import { Outlet } from "react-router-dom";
import Registration from "../Registration/Registration";
import App from "../app/app";
import appStyles from "./app2.module.css";
import Login from "../Login/Login";
import Header from "../header/header";
const App2 = () => {
  return (
    <div className={appStyles.field}>
      <Header />
      <div className={appStyles.mainPart}>
        <Outlet />
      </div>
    </div>
  );
};

export default App2;
