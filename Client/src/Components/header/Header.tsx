import React from 'react';
import HeaderTop from './Top/HeaderTop';
import HeaderBody from './Body/HeaderBody';
import styles from './header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <HeaderTop />
            <HeaderBody />
        </div>
    );
};

export default Header;
