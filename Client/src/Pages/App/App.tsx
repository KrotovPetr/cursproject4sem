import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../../Components/Header/Header';
import LoginPage from '../Login/LoginPage';
import '../../Styles/_commonStyles.module.scss';
import Footer from '../../Components/Footer/Footer';
import Options from '../../Components/Options/Options';
import AboutPage from '../AboutPage/AboutPage';
import RegistrationPage from '../Registration/RegistrationPage';
import AccountPage from "../AccountPage/AccountPage";
import Supplies from "../Supplies/Supplies";
import Service from "../Service/Service";
import Tools from "../Tools/Tools";

function Rent() {
    return null;
}

const App: FC = () => {
    return (
        <div>

            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="service" element={<Service />} />
                    <Route path="rent" element={<Rent />} />
                    <Route path="supplies" element={<Supplies />} />
                    <Route path="tools" element={<Tools />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="registration" element={<RegistrationPage />} />
                    <Route path="account" element={<AccountPage />} />
                </Routes>
                <Options />
                <Footer />
            </BrowserRouter>

        </div>
    );
};

export default App;
