import React, { FC } from 'react';
import Input from '../../../Input/Input';
import styles from './passInputs.module.scss';
import Checkbox from '../../../Checkbox/Checkbox';

const PassInputs: FC = () => {
    return (
        <div className={styles.form}>
            <div className={styles.inputs}>
                <Input
                    label="Password"
                    type="password"
                    placeholder="Your Email"
                />
                <Input
                    label="Repeat password"
                    type="password"
                    placeholder="Your Password"
                />
                <Checkbox />
            </div>
        </div>
    );
};

export default PassInputs;
