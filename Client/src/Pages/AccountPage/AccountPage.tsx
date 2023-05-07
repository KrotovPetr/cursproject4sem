import React, { FC } from 'react';
import styles from './accountPage.module.scss';
import Menu from '../../Components/menu/Menu';
import AccountDataBlock from '../../Components/accountComponents/accountDataBlock/accountDataBlock';
import {NavLink} from "react-router-dom";
import {deleteCookie} from "../../Utils/Functions/deleteCookie";
import {changeLogin} from "../../Store/Reducers/userSlice/userSlice";
import {isAuth} from "../../Utils/Functions/isLogin";
import {useAppDispatch} from "../../Store/Hooks/redux";

const AccountPage: FC = () => {
    const dispatch = useAppDispatch();
    const clearAllCookie = ()=>{
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        deleteCookie("userData");
        dispatch(changeLogin(isAuth()));
    }

    return (
        <div className={styles.accountPage}>
            <main className={styles.content}>
                <h1 className={styles.h1Text}>My Dashboard</h1>
                <div className={styles.options}>
                    <div className={styles.leftBlocks}>
                        <Menu />
                        <NavLink to="/" className={styles.exitLink} onClick={clearAllCookie}>Logout...</NavLink>
                    </div>
                    <AccountDataBlock />
                </div>
            </main>
        </div>
    );
};

export default AccountPage;
