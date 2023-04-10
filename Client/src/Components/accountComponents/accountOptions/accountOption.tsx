import React from 'react';
import styles from './accountOption.module.scss';
const AccountOption: any = (props: any) => {
    return (
        <div className={styles.optionContainer}>
            {props.elem}
        </div>
    );
};

export default AccountOption;
