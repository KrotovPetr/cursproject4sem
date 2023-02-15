import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App/App";
import "./Styles/_commonStyles.module.scss"
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);


// const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(thunk))
// );

root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
);