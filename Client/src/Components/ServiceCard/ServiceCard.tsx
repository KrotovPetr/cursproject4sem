import React, { FC } from 'react';
import styles from './serviceCard.module.scss';
import Done from '../../Utils/Images/done.png';
import Button from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';
import Delivery from '../../Utils/Images/delivery.png';

const ServiceCard: FC<any> = (props) => {
    const options = ['Delivery', 'Pro'];
    return (
        <div className={styles.serviceCardBody}>
            <div className={styles.serviceDescription}>
                <div className={styles.serviceHeader}>
                    <h1 className={styles.serviceName}>
                        Samodelkin Development
                    </h1>
                    <div className={styles.iconBackground}>
                        <img
                            className={styles.icon}
                            src={Done}
                            alt={'official'}
                        />
                    </div>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.address}>
                        016774, Тульская область, город Видное, шоссе Чехова, 17
                    </div>
                    <div className={styles.otherInfo}>
                        <p className={styles.pText}>Phone: +7800553535</p>
                        <p className={styles.pText}>
                            Email: kakoytoemail@ya.ru
                        </p>
                        <p className={styles.pText}>Website: www.remont.ru</p>
                        <p className={styles.pText}>
                            Tags: #instruments #specials #head
                        </p>
                    </div>
                    <div className={styles.options}>
                        {options.map((option) => (
                            <img src={option} alt="Option" key={uuidv4()} />
                        ))}
                    </div>
                    <div className={styles.submitButton}>
                        <Button butContent="Submit" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
