import React, {FC, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../../Components/header/Header';
import '../../Styles/_commonStyles.module.scss';
import Footer from '../../Components/footer/Footer';
import Options from '../../Components/options/Options';
import AboutPage from '../AboutPage/AboutPage';
import AccountPage from '../AccountPage/AccountPage';
import Supplies from '../Supplies/Supplies';
import Service from '../Service/Service';
import Tools from '../Tools/Tools';
import Rent from '../Rent/Rent';
import ResetPasswordPage from "../FormsPages/ResetPasswordPage/ResetPasswordPage";
import RecoverPasswordPage from "../FormsPages/RecoverPasswordPage/RecoverPasswordPage";
import RegistrationPage from "../FormsPages/Registration/RegistrationPage";
import LoginPage from "../FormsPages/Login/LoginPage";
import ProtectedRoute from "../../Components/protectedRoute/protectedRoute";
import {useAppSelector} from "../../Store/Hooks/redux";

const App: FC = () => {
    const isLogin = useAppSelector(state=>state.userReducer.isLogin);

    useEffect(()=>{

    }, [])
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
                    <ProtectedRoute path="account" element={<AccountPage />} />
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
