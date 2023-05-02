import React from 'react';
import styles from './accountDashboard.module.scss';
import Input from "../../inputs/input/Input";
import {FieldPath, useForm} from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

const AccountDashboard = () => {
    const fields = [
        "Name",
        "Surname",
        "Login",
    ];
    const { register, handleSubmit } = useForm<any>();
    return (
        <div className={styles.dashboardBlock}>
            <h1 className={styles.header}>Account Dashboard</h1>
            <hr className={styles.line}/>
            <form className={styles.fields}>
                {
                    fields.map((elem: FieldPath<any>):JSX.Element=>{
                        return <Input label={elem} register={register} required isReq={false} key={uuidv4()}/>
                    })
                }
                <div className={styles.button}>
                    <input
                        type={'submit'}
                        value={'Edit'}
                        className={styles.submit}
                    />
                </div>
            </form>
        </div>
    );
};

export default AccountDashboard;