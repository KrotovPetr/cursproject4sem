import React, { FC } from 'react';
import styles from './regPage.module.scss';
import Button from '../../../Components/button/Button';
import RegForm from '../../../Components/forms/RegForm/RegForm';
import {useAppSelector} from "../../../Store/Hooks/redux";
import {Navigate} from "react-router-dom";

const RegistrationPage: FC = () => {
    const isLogin = useAppSelector((state) => state.userReducer.isLogin)

    if (isLogin) {
        return <Navigate to={"/account"} />;
    }

    return (
        <div className={styles.regPage}>
            <div className={styles.regForm} onSubmit={(): void => {}}>
                <div className={styles.breadCrumbs}>Тут крошки</div>
                <h2 className={styles.header}>Registration</h2>
                <div className={styles.infoBlocks}>
                    <div className={styles.block}>
                        <h4 className={styles.hText}>Create new account</h4>
                        <RegForm />
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
                            {/*<Button butContent='Next'/>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
