import React, { FC, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../../Components/header/Header';
import '../../Styles/_commonStyles.module.scss';
import Footer from '../../Components/footer/Footer';
import Options from '../../Components/options/Options';
import AboutPage from '../AboutPage/AboutPage';
import AccountPage from '../AccountPage/AccountPage';
import Service from '../Service/Service';
import Tools from '../Tools/Tools';
import Rent from '../Rent/Rent';
import ResetPasswordPage from '../FormsPages/ResetPasswordPage/ResetPasswordPage';
import RecoverPasswordPage from '../FormsPages/RecoverPasswordPage/RecoverPasswordPage';
import RegistrationPage from '../FormsPages/Registration/RegistrationPage';
import LoginPage from '../FormsPages/Login/LoginPage';
import { useAppDispatch, useAppSelector } from '../../Store/Hooks/redux';
import ProtectedRoute from '../../Components/protectedRoute/protectedRoute';
import {changeLogin, setRefreshToken} from "../../Store/Reducers/userSlice/userSlice";
import Cart from "../Cart/cart";
import AdminPage from "../AdminPanelPage/adminPage";
import {getCookie} from "../../Utils/Functions/getCookie";
import {useLazyVerifyUserLoginQuery} from "../../Store/ApiQuery/UserService";
import {setCookie} from "../../Utils/Functions/setCookie";

const App: FC = () => {
    const {isLogin} = useAppSelector((state) => state.userReducer)

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="service" element={<Service />} />
                    <Route path="rent" element={<Rent />} />
                    <Route path="tools" element={<Tools />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="registration" element={<RegistrationPage />} />
                    <Route
                        path="account"
                        element={
                            <ProtectedRoute
                                isAuthenticated = {isLogin}
                                authenticationPath= {"/login"}
                                outlet={<AccountPage />}
                            />
                        }
                    />
                    <Route
                        path="admin"
                        element={
                            <ProtectedRoute
                                isAuthenticated = {isLogin}
                                authenticationPath= {"/login"}
                                outlet={<AdminPage />}
                            />
                        }
                    />
                    <Route
                        path="reset-password"
                        element={<ResetPasswordPage />}
                    />
                    <Route
                        path="recover-password"
                        element={<RecoverPasswordPage />}
                    />
                    <Route path={"cart"} element={<Cart/>}/>
                </Routes>
                <Options />
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
