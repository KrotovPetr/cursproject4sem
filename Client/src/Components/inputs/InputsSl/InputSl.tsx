import React, { FC } from 'react';
import styles from './input.module.scss';
import {UseFormRegister} from "react-hook-form";

type TInputSl  = {
    border: string,
    label: string,
    lbl: string,
    register: UseFormRegister<any>;
    required: boolean;
}

const InputSl: FC<TInputSl> = ({border, lbl, register, required, label}) => {
    return (
        <div className={styles.inputGroup}>
            <input
                className={border === "black"  ? styles.inputBlack : styles.inputLight}
                {...register(label, { required })}
            />
            <label className={lbl === "black" ? styles.labelDark :  styles.labelLight}>
                {label}
            </label>
        </div>
    );
};

export default InputSl;
