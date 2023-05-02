import React, { FC } from 'react';
import styles from './menu.module.scss';
import { v4 as uuidv4 } from 'uuid';

const Menu: FC = () => {
    const menuOptions: string[] = [
        'Account Dashboard',
        'Account Information',
        'Address Book',
        'My Orders',
        'Stored Payment Methods',
        'My Wish List',
        'Newsletter Subscription',
        'Admin Page',
    ];

    return (
        <div className={styles.menu}>
            {menuOptions.map((elem: string) => {
                return (
                    <p className={styles.menuOption} key={uuidv4()}>
                        {elem}
                    </p>
                );
            })}
        </div>
    );
};

export default Menu;
