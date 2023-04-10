import React from 'react';
import styles from './loginPage.module.scss';
import Button from '../../../Components/button/Button';
import LoginForm from '../../../Components/forms/LoginForm/LoginForm';
import {Navigate, useNavigate} from 'react-router-dom';
import {useAppSelector} from "../../../Store/Hooks/redux";

const LoginPage = () => {
    const navigate = useNavigate();
    const isLogin = useAppSelector((state) => state.userReducer.isLogin)

    if (isLogin) {
        return <Navigate to={"/account"} />;
    }

    const toRegistration = (): void => {
        navigate('/registration');
    };


    return (
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <div className={styles.breadCrumbs}>Тут крошки</div>
                <h2 className={styles.header}>Customer Login</h2>
                <div className={styles.infoBlocks}>
                    <div className={styles.block}>
                        <h4 className={styles.hText}>Registered Customers</h4>
                        <p className={styles.planeText}>
                            If you have an account, sign in with your email
                            address.
                        </p>
                        <LoginForm />
                    </div>
                    <div className={styles.block}>
                        <h4 className={styles.hText}>New Customer?</h4>
                        <p className={styles.planeText}>
                            Creating an account has many benefits
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.planeText}>
                                {' '}
                                Check out faster
                            </li>
                            <li className={styles.planeText}>
                                {' '}
                                Keep more than one address
                            </li>
                            <li className={styles.planeText}>
                                Track orders and more
                            </li>
                        </ul>
                        <div className={styles.regButton}>
                            <Button
                                butContent="Create an account"
                                clicker={toRegistration}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
