import React, { FC } from 'react';
import styles from './wishList.module.scss';

const WishList: FC = () => {
    return (
        <div className={styles.wishList}>
            <h3 className={styles.header}>My Wish List</h3>
            {!!0 ? (
                <></>
            ) : (
                <p className={styles.pText}>
                    You have no items in your wish list.
                </p>
            )}
        </div>
    );
};

export default WishList;
