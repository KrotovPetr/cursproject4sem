import React from 'react';
import styles from './accountBlock.module.scss';
import AccountDashboard from "../accountDashboard/accountDashboard";
import AccountInformation from "../accountInformation/accountInformation";
import AddressBook from "../addressBook/addressBook";
import MyOrders from "../myOrders/myOrders";

const AccountDataBlock = () => {
    const options:JSX.Element[] = [
        <AccountDashboard/>,
        <AccountInformation/>,
        <AddressBook/>,
        <MyOrders/>
    ];

    return (
        <div className={styles.accountContentBlock}>
            <div className={styles.options}>
                {options.map((elem) => {
                    return elem;
                })}
            </div>
        </div>
    );
};

export default AccountDataBlock;
