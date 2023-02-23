import React, {FC} from 'react';
import styles from "./input.module.scss";
const InputFooter:FC = () => {
    return (
        <div className={styles.inputGroup}>
            <input type="text" id="name" placeholder=" " className={styles.input}/>
            <label htmlFor="name" className={styles.label}>Your Email</label>
        </div>
    );
};

export default InputFooter;