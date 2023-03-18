import React, { FC } from 'react';
import styles from './headerTop.module.scss';
import Telegram from '../../../Utils/Images/telegram.png';
import Instagram from '../../../Utils/Images/Instagram.png';
const HeaderTop: FC = () => {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.infoContainer}>
                <div className={styles.shedule}>
                    <span className={styles.days}>Mon-Thu:</span> 9:00AM -
                    5:30PM
                </div>
                <div className={styles.address}>
                    Visit our showroom in 1234 Street Adress City Address, 1234
                    Contact Us
                </div>
                <div className={styles.contacts}>
                    Call Us: (00) 1234 5678
                    <img className={styles.icon} src={Telegram} alt="TG link" />
                    <img
                        className={styles.icon}
                        src={Instagram}
                        alt="IG link"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
