import React, { FC } from 'react';
import styles from './serviceCard.module.scss';
import Done from '../../Utils/Images/done.png';
import Button from '../button/Button';
import { v4 as uuidv4 } from 'uuid';
import Delivery from '../../Utils/Images/delivery.png';

const ServiceCard: FC<any> = (props) => {
    const options = ['Delivery', 'Pro'];
    return (
        <div className={styles.serviceCardBody}>
            <div className={styles.serviceDescription}>
                <div className={styles.serviceHeader}>
                    <h1 className={styles.serviceName}>
                        {props.data.name}
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
                        {props.data.address}
                    </div>
                    <div className={styles.otherInfo}>
                        <p className={styles.pText}>Phone: {props.data.phone}</p>
                        <p className={styles.pText}>
                            Email: {props.data.email}
                        </p>
                        <p className={styles.pText}>Website: {props.data.website}</p>
                        <p className={styles.pText}>
                            Tags: #instruments #specials #head
                        </p>
                    </div>
                    <div className={styles.options}>
                        <img src={Delivery} alt="Option" key={uuidv4()} />
                    </div>
                    <div className={styles.submitButton} onClick={
                        ()=>{
                            alert("You were submitted to service news and promos!")
                        }
                    }>
                        <Button butContent="Submit" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
