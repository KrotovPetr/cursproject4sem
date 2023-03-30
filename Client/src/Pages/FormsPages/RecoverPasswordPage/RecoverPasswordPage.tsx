import React from 'react';
import styles from './recoverPasswordPage.module.scss'
import RecoverForm from "../../../Components/forms/RecoverForm/recoverForm";
import Manual from '../../../Utils/Images/manual.png';
const RecoverPasswordPage = () => {
    return (
        <div className={styles.recoverPasswordPage}>
            <div className={styles.formContainer}>
            <RecoverForm/>
            </div>

            <div className={styles.formContainer}>
                <img src={Manual} className={styles.img}/>
                <h3 className={styles.header}>Instruction</h3>
                <p className={styles.instruction}>Check your email for instructions on how to reset your password.
                    Follow the instructions in the email to create a new password.
                    Log in to your account using your new password.
                </p>

            </div>
        </div>
    );
};

export default RecoverPasswordPage;