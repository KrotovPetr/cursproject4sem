import React, {FC} from 'react';
import styles from './loginForm.module.scss';
import Input from '../../input/Input';
import {SubmitHandler, useForm} from "react-hook-form";
import {loginAPI} from "../../../Store/ApiQuery/UserService";
import {NavLink} from "react-router-dom";

interface  IFormInput {
    email: string,
    password: string,
}


const LoginForm: FC = () => {
    // const [loginUser]  = loginAPI.useCreateLoginMutation();
    const { register, handleSubmit } = useForm<IFormInput>();

    // const onSubmit: SubmitHandler<IFormInput> = (data) => {
    //     loginUser(data);
    // };

    return (
        <form className={styles.form} onSubmit={handleSubmit(()=>console.log(1))}>
            <div className={styles.inputs}>
                <Input label="Email" register={register} required />
                <Input
                    label="Password"
                    register={register} required
                />
            </div>
            <div className={styles.formLinks}>
                <div className={styles.button} >
                    <input type={"submit"} value={"Sign in"} className={styles.submit}/>
                </div>
                <NavLink to="/reset-password" className={styles.aText}>Forgot your password?</NavLink>
            </div>
        </form>
    );
};

export default LoginForm;
