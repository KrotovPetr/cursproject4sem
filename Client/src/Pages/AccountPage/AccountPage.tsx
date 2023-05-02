import React, { FC } from 'react';
import styles from './accountPage.module.scss';
import CompareList from '../../Components/compareList/CompareList';
import WishList from '../../Components/wishList/WishList';
import Menu from '../../Components/menu/Menu';
import AccountDataBlock from '../../Components/accountComponents/accountDataBlock/accountDataBlock';

const AccountPage: FC = () => {
    return (
        <div className={styles.accountPage}>
            <main className={styles.content}>
                <h1 className={styles.h1Text}>My Dashboard</h1>
                <div className={styles.options}>
                    <div className={styles.leftBlocks}>
                        <Menu />
                        <CompareList />
                        <WishList />
                    </div>
                    <AccountDataBlock />
                </div>
            </main>
        </div>
    );
};

export default AccountPage;
