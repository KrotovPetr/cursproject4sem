import React from 'react';
import styles from './loginForm.module.scss';
import Input from '../../input/Input';
import {SubmitHandler, useForm} from "react-hook-form";
import {loginAPI} from "../../../Store/ApiQuery/UserService";

interface  IFormInput {
    email: string,
    password: string,
}


const LoginForm = () => {
    const [loginUser, result]  = loginAPI.useCreateLoginMutation();
    const { register, handleSubmit } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        loginUser(data);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputs}>
                <Input label="Email" register={register} required/>
                <Input
                    label="Password"
                    register={register} required
                />
            </div>
            <div className={styles.formLinks}>
                <div className={styles.button} >
                    <input type={"submit"} value={"Sign in"} className={styles.submit}/>
                </div>
                <a className={styles.aText}>Forgot your password?</a>
            </div>
        </form>
    );
};

export default LoginForm;
