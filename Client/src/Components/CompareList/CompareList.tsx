import React, { FC } from 'react';
import styles from './compareList.module.scss';

const CompareList: FC = () => {
    return (
        <div className={styles.compareList}>
            <h3 className={styles.header}>Compare Products</h3>
            {!!0 ? (
                <></>
            ) : (
                <p className={styles.pText}>You have no items to compare.</p>
            )}
        </div>
    );
};

export default CompareList;
