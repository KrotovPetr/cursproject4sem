import React, {FC} from 'react';
import styles from './input.module.scss'

type TInput = {
    placeholder: string,
    label: string,
    type: string,
}


const Input:FC<TInput> = (props) => {
    return (
        <div className={styles.inputElem}>
            <label htmlFor="input" className={styles.label}>{props.label}<span className={styles.labelSpan}>*</span></label>
            <input id="input" placeholder={props.placeholder} type={props.type} className={styles.input}/>
        </div>
    );
};

export default Input;