import React, {FC} from 'react';
import styles from './serviceCard.module.scss';

const ServiceCard:FC<any> = (props) => {
    return (
        <div className={styles.serviceCardBody}>
            <div className={styles.photo}></div>
            <div className={styles.serviceDescription}>
                <h1 className={styles.serviceName}>Сервисный центр "Samodelkin Development"</h1>
            </div>
        </div>
    );
};

export default ServiceCard;