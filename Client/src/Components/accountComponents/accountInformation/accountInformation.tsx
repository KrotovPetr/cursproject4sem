import React from 'react';
import styles from './accountInformation.module.scss'
const AccountInformation = () => {
    return (
        <div className={styles.accountInfo}>
            <h1 className={styles.header}>Account Information</h1>
            <div className={styles.infoContainer}>
            </div>
        </div>
    );
};

export default AccountInformation;