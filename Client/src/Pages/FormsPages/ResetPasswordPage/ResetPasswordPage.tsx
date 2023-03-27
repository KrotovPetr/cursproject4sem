import React from 'react';
import styles from './resetPasswordPage.module.scss';

const ResetPasswordPage = () => {

    return (
        <div className={styles.resetPasswordPage}>
            <div className={styles.resetForm}>
                <div className={styles.breadCrumbs}>Тут крошки</div>
                <h2 className={styles.header}>Customer Login</h2>
                <div className={styles.infoBlocks}>
                    <div className={styles.block}>
                        <h4 className={styles.hText}>Enter your email</h4>
                        <ResetPasswordPage/>
                    </div>
                    <div className={styles.block}>
                        <h4 className={styles.hText}>Procedure of actions</h4>
                        <ul className={styles.list}>
                            <li className={styles.planeText}>
                                {' '}
                                Enter your email
                            </li>
                            <li className={styles.planeText}>
                                {' '}
                                We will send the code to your Email address
                            </li>
                            <li className={styles.planeText}>
                                Enter the code and your new password in the fields that appear
                            </li>
                        </ul>
                        <div className={styles.regButton}>
                            {/*<Button butContent="Create an account" clicker = {toRegistration}/>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;