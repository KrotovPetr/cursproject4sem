import React, {useEffect, useState} from 'react';
import styles from './accountDashboard.module.scss';
import Input from "../../inputs/input/Input";
import {FieldPath, useForm} from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import {useAppSelector} from "../../../Store/Hooks/redux";
import {getCookie} from "../../../Utils/Functions/getCookie";

const AccountDashboard = () => {
    const fields = [
        "Name",
        "Surname",
        "Login",
    ];

    const { register, handleSubmit } = useForm<any>();

    const [userData, setUserData] = useState<any>("");

    useEffect(()=>{
        setUserData(getCookie("userData")?.split(" "));
    },[])

    return (
        <div className={styles.dashboardBlock}>
            <h1 className={styles.header}>Account Dashboard</h1>
            <hr className={styles.line}/>
            <form className={styles.fields}>
                {
                    userData ? fields.map((elem: FieldPath<any>, index: number):JSX.Element=>{
                        if(index === 0){
                            return <Input defaultValue={userData[1]} label={elem} register={register} required isReq={false} key={uuidv4()}/>
                        } else if(index === 1){
                            return <Input   defaultValue={userData[2]} label={elem} register={register} required isReq={false} key={uuidv4()}/>
                        }
                        return <Input  defaultValue={userData[0]} label={elem} register={register} required isReq={false} key={uuidv4()}/>
                    }) : fields.map((elem: FieldPath<any>, index: number):JSX.Element=>{
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