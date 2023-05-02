import React from 'react';
import styles from './accountBlock.module.scss';
import AccountDashboard from "../accountDashboard/accountDashboard";
import AccountInformation from "../accountInformation/accountInformation";
import AddressBook from "../addressBook/addressBook";
import MyOrders from "../myOrders/myOrders";
import NewsSubscription from "../newsletterSubscription/newsSubscription";
import PaymentMethods from "../storedPaymentMethods/paymentMethods";
import AccountAdminPage from "../accountAdminPage/accountAdminPage";

const AccountDataBlock = () => {
    const options:JSX.Element[] = [
        <AccountDashboard/>,
        <AccountInformation/>,
        <AddressBook/>,
        <MyOrders/>,
        <NewsSubscription/>,
        <PaymentMethods/>,
        <AccountAdminPage/>
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
