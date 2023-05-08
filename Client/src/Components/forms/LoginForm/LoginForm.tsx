import React, {FC, useEffect} from 'react';
import styles from './loginForm.module.scss';
import Input from '../../inputs/input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../../Store/ApiQuery/UserService';
import {setCookie} from "../../../Utils/Functions/setCookie";
import {getCookie} from "../../../Utils/Functions/getCookie";
import {useAppDispatch, useAppSelector} from "../../../Store/Hooks/redux";
import {isAuth} from "../../../Utils/Functions/isLogin";
import {changeLogin, setUserData} from "../../../Store/Reducers/userSlice/userSlice";

interface IFormInput {
    email: string;
    password: string;
}

const LoginForm: FC = () => {
    const navigate = useNavigate();
    const [loginUser] = useLoginUserMutation();
    const { register, handleSubmit } = useForm<IFormInput>();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        let response = await loginUser(data);

        if (!('error' in response)) {
            setCookie("accessToken",response.data.userData.accessToken, undefined)
            setCookie("refreshToken",response.data.userData.refreshToken, undefined)
            setCookie("userData",`${response.data.userData.user.email} ${response.data.userData.user.firstName} ${response.data.userData.user.lastName} ${response.data.userData.user.id}`, undefined)
            dispatch(changeLogin(true));

        } else {
            navigate('/registration');
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputs}>
                <Input label="Email" register={register} required />
                <Input label="Password" register={register} required />
            </div>
            <div className={styles.formLinks}>
                <div className={styles.button}>
                    <input
                        type={'submit'}
                        value={'Sign in'}
                        className={styles.submit}
                    />
                </div>
                <NavLink to="/reset-password" className={styles.aText}>
                    Forgot your password?
                </NavLink>
            </div>
        </form>
    );
};

export default LoginForm;
