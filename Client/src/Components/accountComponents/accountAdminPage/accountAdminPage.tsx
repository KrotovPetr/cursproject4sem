import React, {useEffect, useState} from 'react';
import styles from "./accountAdminPage.module.scss";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../../Store/Hooks/redux";
import {getCookie} from "../../../Utils/Functions/getCookie";

const AccountAdminPage = () => {

    const [role, setRole] = useState<any>(0);

    useEffect(()=>{
        getCookie("userRole")
        setRole(getCookie("userRole"))
    },[])
    return (
        <div className={styles.adminPage}>
            <h1 className={styles.header}>Admin Page</h1>
            <hr className={styles.line}/>
        {role === "0" && <NavLink to={"/admin"} className={styles.navLink}>To admin page...</NavLink>}
        </div>
    );
};

export default AccountAdminPage;