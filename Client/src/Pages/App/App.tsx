import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../../Components/header/Header';
import LoginPage from '../Login/LoginPage';
import '../../Styles/_commonStyles.module.scss';
import Footer from '../../Components/footer/Footer';
import Options from '../../Components/options/Options';
import AboutPage from '../AboutPage/AboutPage';
import RegistrationPage from '../Registration/RegistrationPage';
import AccountPage from '../AccountPage/AccountPage';
import Supplies from '../Supplies/Supplies';
import Service from '../Service/Service';
import Tools from '../Tools/Tools';
import Rent from '../Rent/Rent';
import ResetPasswordPage from "../ResetPasswordPage/ResetPasswordPage";
import RecoverPasswordPage from "../RecoverPasswordPage/RecoverPasswordPage";

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
                    <Route path="reset-password" element={<ResetPasswordPage/>} />
                    <Route path="recover-password" element={<RecoverPasswordPage/>} />
                </Routes>
                <Options />
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
