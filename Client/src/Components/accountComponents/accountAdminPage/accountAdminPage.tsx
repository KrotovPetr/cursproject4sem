import React from 'react';
import styles from "./accountAdminPage.module.scss";
import {NavLink} from "react-router-dom";

const AccountAdminPage = () => {
    return (
        <div className={styles.adminPage}>
            <h1 className={styles.header}>Admin Page</h1>
            <hr className={styles.line}/>
            <NavLink to={"/admin"} className={styles.navLink}>To admin page...</NavLink>
        </div>
    );
};

export default AccountAdminPage;