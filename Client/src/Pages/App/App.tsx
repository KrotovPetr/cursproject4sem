import React, {FC} from 'react';
import {BrowserRouter,  Route,  Routes} from "react-router-dom";
import Home from "../Home/Home";
import Header from "../../Components/Header/Header";
import LoginPage from "../Login/LoginPage";

const App: FC = () => {

    return (
        <div>
           <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;