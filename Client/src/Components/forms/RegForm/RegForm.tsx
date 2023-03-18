import React, { FC } from 'react';
import styles from './regForm.module.scss';
import Input from '../../input/Input';
import {SubmitHandler, useForm} from "react-hook-form";
import {NavLink, useNavigate} from "react-router-dom";
import {registerAPI} from "../../../Store/ApiQuery/UserService";
const RegForm: FC = () => {
    const navigate = useNavigate();
    const [ registerUser, result]  = registerAPI.useRegistrationMutation();
    const { register, handleSubmit } = useForm<any>();
    const onSubmit: SubmitHandler<any> = (data) => {
        if(data.Password.localeCompare(data["Repeat Password"])===0){
            registerUser(data);
        } else {
            console.log("Пароли не совпадают")
        }

    };
    return (
        <form className={styles.regForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputs}>
                <Input label="Email" register={register} required/>
                <Input label="Password" register={register} required/>
                <Input label="Repeat Password" register={register} required/>
                <div className={styles.formLinks}>
                    <div className={styles.button} >
                        <input type={"submit"} value={"Create account"} className={styles.submit}/>
                    </div>
                    <NavLink to='/' className={styles.aText}>Already have an account?</NavLink>
                </div>
            </div>
        </form>
    );
};

export default RegForm;
