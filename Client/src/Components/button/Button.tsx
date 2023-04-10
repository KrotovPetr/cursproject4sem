import React, { FC } from 'react';
import styles from './button.module.scss';

type TButton = {
    butContent: string;
    clicker?: () => void;
};

const Button: FC<TButton> = (props) => {
    return (
        <button className={styles.button} onClick={props.clicker}>
            <p className={styles.text}>{props.butContent}</p>
        </button>
    );
};

export default Button;
