import React from 'react';
import styles from './resetPasswordPage.module.scss';
import ResetForm from '../../../Components/forms/ResetForm/ResetForm';
import {useAppSelector} from "../../../Store/Hooks/redux";
import {Navigate} from "react-router-dom";

const ResetPasswordPage = () => {
    const isLogin = useAppSelector((state) => state.userReducer.isLogin)

    if (isLogin) {
        return <Navigate to={"/account"} />;
    }
    return (
        <div className={styles.resetPasswordPage}>
            <div className={styles.formContainer}>
                <ResetForm />
            </div>
        </div>
    );
};

export default ResetPasswordPage;
