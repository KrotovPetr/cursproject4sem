import React from 'react';
import InputSl from "../../inputs/InputsSl/InputSl";
import styles from "./resetForm.module.scss"
import {useNavigate} from "react-router-dom";
import {useResetUserPasswordMutation} from "../../../Store/ApiQuery/UserService";
import {SubmitHandler, useForm} from "react-hook-form";
interface  IFormInput {
    email: string
}

const ResetForm = () => {
    const navigate = useNavigate();
    const [resetUserPassword] = useResetUserPasswordMutation();
    const { register, handleSubmit } = useForm<IFormInput>();


    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log(data)
        let response = await resetUserPassword(data);
        console.log(response)
        navigate('/recover-password');
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.formHeader}>Password Reset</h1>
            <InputSl border={"black"} lbl={"light"} register={register} required label={"Email"}/>
            <div className={styles.button} >
                <input type={"submit"} value={"Reset"} className={styles.submit}/>
            </div>
        </form>
    );
};

export default ResetForm;