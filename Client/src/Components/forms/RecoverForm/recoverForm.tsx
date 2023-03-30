import React from 'react';
import styles from "../ResetForm/resetForm.module.scss";
import InputSl from "../../inputs/InputsSl/InputSl";
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {useSetNewPasswordMutation} from "../../../Store/ApiQuery/UserService";

const RecoverForm = () => {
    const navigate = useNavigate();
    const [setPassword] = useSetNewPasswordMutation();
    const { register, handleSubmit } = useForm<any>();

    const onSubmit: SubmitHandler<any> = async (data) => {
        let newData = {link: data["Code"], password: data["Password"]}
        let response = await setPassword(newData);
        console.log(response)
        navigate('/');
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.formHeader}>New Password</h1>
            <InputSl border={"black"} lbl={"light"} register={register} required label={"Code"}/>
            <InputSl border={"black"} lbl={"light"} register={register} required label={"Password"}/>
            <InputSl border={"black"} lbl={"light"} register={register} required label={"Repeat password"}/>
            <div className={styles.button} >
                <input type={"submit"} value={"Update"} className={styles.submit}/>
            </div>
        </form>
    );
};

export default RecoverForm;