import React, { FC } from 'react';
import styles from './serviceCard.module.scss';
import Logo from '../../../Utils/Images/logo2.png'
const ServiceCard: FC<any> = (props) => {
    return (
        <div className={styles.serviceCardBody}>
            <img src={Logo} className={styles.photo}></img>
            <div className={styles.serviceDescription}>
                <div className={styles.serviceHeader}>
                    <h1 className={styles.serviceName}>
                        Сервисный центр "Samodelkin Development"
                    </h1>
                    <div className={styles.status}></div>
                </div>
                <div className={styles.contacts}>
                    <p className={styles.pText}>Phone: 8800553535</p>
                    <p className={styles.pText}>Email: kakoytoemail@ya.ru</p>
                    <p className={styles.pText}>Whatsapp: 8800553535</p>
                    <p className={styles.pText}>Rating: 4.8</p>
                </div>

            </div>

        </div>
    );
};

export default ServiceCard;
