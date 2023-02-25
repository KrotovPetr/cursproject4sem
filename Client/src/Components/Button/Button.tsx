import React, { FC } from 'react';
import styles from './button.module.scss';

type TButton = {
    butContent: string;
};

const Button: FC<TButton> = (props) => {
    return (
        <div className={styles.button}>
            <p className={styles.text}>{props.butContent}</p>
        </div>
    );
};

export default Button;
