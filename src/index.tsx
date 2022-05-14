import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./Components/app/app";
import Registration from "./Components/Registration/Registration";
import App2 from "./Components/App2/app2";
import PerAcc from "./Components/Personal Account/perAcc";
import Login from "./Components/Login/Login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App2 />}>
          <Route path="perAcc" element={<PerAcc />} />
          <Route path="registration" element={<Registration />} />
          <Route path="home" element={<App />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
