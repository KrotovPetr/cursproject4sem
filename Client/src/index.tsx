import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App/App';
import './Styles/_commonStyles.module.scss';
import {Provider} from "react-redux";
import {setupStore} from "./Services/store";
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
    <React.StrictMode>
        <Provider store = {store}>
            <App />
        </Provider>
    </React.StrictMode>
);
