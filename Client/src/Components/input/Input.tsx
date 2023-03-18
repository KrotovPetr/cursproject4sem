import React, {FC} from 'react';
import styles from './input.module.scss';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {Path, UseFormRegister} from "react-hook-form";

// interface IFormValues {
//     "First Name": string;
//     Age: number;
// }

type InputProps = {
    label: Path<any>;
    register: UseFormRegister<any>;
    required: boolean;
};

const Input: FC= ({ label, register, required }: InputProps) => {
    return (
        <div className={styles.inputElem}>
            <label className={styles.label}>
                {label}
                <span className={styles.labelSpan}>*</span>
            </label>
            <input
                {...register(label, { required })}
                className={styles.input}
            />
        </div>
    );
};

export default Input;
