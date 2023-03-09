import React, { FC } from 'react';
import styles from './rent.module.scss';
import RentCard from './RentCard/RentCard';
import { v4 as uuidv4 } from 'uuid';
const Rent: FC = () => {
    let arr = [
        'Носки',
        'Штаны',
        'Носки',
        'Штаны',
        'Носки',
        'Штаны',
        'Носки',
        'Штаны',
        'Носки',
        'Штаны',
    ];
    return (
        <div className={styles.rent}>
            <div className={styles.content}>
                {arr.map((elem) => {
                    return <RentCard key={uuidv4()} />;
                })}
            </div>
        </div>
    );
};

export default Rent;
