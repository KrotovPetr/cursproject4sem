import React from 'react';
import styles from './loginForm.module.scss';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

const LoginForm = () => {
    return (
        <div className={styles.form}>
            <div className={styles.inputs}>
                <Input label="name" type="text" placeholder="Your Email" />
                <Input
                    label="Password"
                    type="password"
                    placeholder="Your Password"
                />
            </div>
            <div className={styles.formLinks}>
                <div className={styles.button}>
                    <Button butContent="Sign in" />
                </div>
                <a className={styles.aText}>Forgot your password?</a>
            </div>
        </div>
    );
};

export default LoginForm;
