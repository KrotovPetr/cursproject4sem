import React from 'react';
import styles from './input.module.scss';
import { Simulate } from 'react-dom/test-utils';
import input = Simulate.input;
import {FieldPath,  UseFormRegister} from 'react-hook-form';

interface IFormValues {
    Email?: string;
    Password?: string;
    'Repeat Password'?: string;
}

type InputProps = {
    label: FieldPath<any>;
    register: UseFormRegister<any>;
    required: boolean;
    isReq?: boolean;
    defaultValue?: string;
};

const Input = ({ label, register, required, isReq = true, defaultValue = ""}: InputProps) => {
    return (
        <div className={styles.inputElem}>
            <label className={styles.label}>
                {label}
                {isReq && <span className={styles.labelSpan}>*</span>}
            </label>
            <input
               placeholder={defaultValue}
                {...register(label, { required })}
                className={styles.input}
            />
        </div>
    );
};

export default Input;
