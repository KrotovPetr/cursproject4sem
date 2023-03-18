import React, { FC } from 'react';
import styles from './accountPage.module.scss';
import CompareList from '../../Components/compareList/CompareList';
import WishList from '../../Components/wishList/WishList';
import Menu from '../../Components/menu/Menu';

const AccountPage: FC = () => {
    return (
        <div className={styles.accountPage}>
            <main className={styles.content}>
                <div className={styles.breadCrumbs}>Тут крошки</div>
                <h1 className={styles.h1Text}>My Dashboard</h1>
                <div className={styles.options}>
                    <div className={styles.leftBlocks}>
                        <Menu />
                        <CompareList />
                        <WishList />
                    </div>
                    <div className={styles.contentBlocks}>
                        <p>Тут будет много опций, но в будущем</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AccountPage;
