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

const App: FC = () => {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="registration" element={<RegistrationPage />} />
                    <Route path="account" element={<AccountPage />} />
                </Routes>
            </BrowserRouter>
            <Options />
            <Footer />
        </div>
    );
};

export default App;
