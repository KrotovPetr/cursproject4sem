import React, { FC } from 'react';
import styles from './regForm.module.scss';
import Input from '../../../Input/Input';
import Button from '../../../Button/Button';
const RegForm: FC = () => {
    return (
        <div className={styles.regForm}>
            <div className={styles.inputs}>
                <Input label="Name" type="text" placeholder="Your Name" />
                <Input label="Surname" type="text" placeholder="Your Surname" />
                <Input label="Email" type="text" placeholder="Your Email" />
                <Input label="Phone" type="text" placeholder="Your Phone" />
            </div>
        </div>
    );
};

export default RegForm;
