import React from 'react';
import styles from './resetPasswordPage.module.scss';
import ResetForm from "../../../Components/forms/ResetForm/ResetForm";

const ResetPasswordPage = () => {

    return (
        <div className={styles.resetPasswordPage}>
            <div className={styles.formContainer}>
                <ResetForm/>
            </div>
        </div>
    );
};

export default ResetPasswordPage;