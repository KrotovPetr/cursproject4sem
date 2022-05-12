import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./Components/app/app";
import Registration from "./Components/Registration/Registration";
import App2 from "./Components/App2/app2";
import Header from "./Components/header/header";
import Login from "./Components/Login/Login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App2 />}>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="home" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
