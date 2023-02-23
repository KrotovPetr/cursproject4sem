import React from 'react';
import Options from "../../Components/Options/Options";
import styles from './loginPage.module.scss';
import Button from "../../Components/Button/Button";
import LoginForm from "../../Components/Forms/LoginForm/LoginForm";


const LoginPage = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <div className={styles.breadCrumbs}>Тут крошки</div>
                <h2 className={styles.header}>Customer Login</h2>
                <div className={styles.infoBlocks}>
                    <div className={styles.block}>
                        <h4 className={styles.hText}>Registered Customers</h4>
                        <p className={styles.planeText}>If you have an account, sign in with your email address.</p>
                        <LoginForm/>
                    </div>
                    <div className={styles.block}>
                        <h4 className={styles.hText}>New Customer?</h4>
                        <p className={styles.planeText}>Creating an account has many benefits</p>
                        <ul className={styles.list}>
                            <li className={styles.planeText}> Check out faster</li>
                            <li className={styles.planeText}>  Keep more than one address</li>
                            <li className={styles.planeText}>Track orders and more</li>
                        </ul>
                        <div className={styles.regButton}><Button butContent="Create an account"/></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;