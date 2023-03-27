import React from 'react';
import styles from './accountOption.module.scss'
const AccountOption: any = (props: any) => {
    return (
        <div className={styles.optionContainer}>
            <h1 className={styles.header}>{props.header}</h1>
            <hr className={styles.line}/>
            <div className={styles.subInfoBlock}></div>
        </div>
    );
};

export default AccountOption;