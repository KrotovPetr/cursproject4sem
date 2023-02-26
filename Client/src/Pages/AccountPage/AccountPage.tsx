import React, {FC} from 'react';
import styles from './accountPage.module.scss';

const AccountPage:FC = () => {
    return (
        <div className={styles.accountPage}>
            <main className={styles.content}>
            <div className={styles.breadCrumbs}>Тут крошки</div>
            <h1 className={styles.h1Text}>My Dashboard</h1>

                <div className={styles.leftBlocks}>
                    <div className={styles.menu}></div>
                    <div className={styles.compareList}>
                        <h3 className={styles.h3Text}>Compare Products</h3>
                        <p className={styles.pText}>You have no items to compare.</p>
                    </div>
                    <div className={styles.wishList}>
                        <h3 className={styles.h3Text}>My wish list</h3>
                        <p className={styles.pText}>You have no items in your wish list.</p>
                    </div>
                </div>
                <div className={styles.contentBlocks}>

                </div>
            </main>

        </div>
    );
};

export default AccountPage;
