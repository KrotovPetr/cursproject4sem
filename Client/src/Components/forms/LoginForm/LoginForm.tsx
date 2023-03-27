import React, {FC} from 'react';
import styles from './loginForm.module.scss';
import Input from '../../input/Input';
import {SubmitHandler, useForm} from "react-hook-form";
import {NavLink, useNavigate} from "react-router-dom";
import {useLoginUserMutation} from "../../../Store/ApiQuery/UserService";

interface  IFormInput {
    email: string,
    password: string,
}


const LoginForm: FC = () => {
    const navigate = useNavigate();
    const [loginUser] = useLoginUserMutation();
    const { register, handleSubmit } = useForm<IFormInput>();


    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
       let response = await loginUser(data);
       if(!('error' in response)){
           navigate("/")
       } else {
           navigate("/registration")
       }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
