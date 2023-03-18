import React, { FC } from 'react';
import styles from './options.module.scss';
import SOS from '../../Utils/Images/sos.png';
import PerAcc from '../../Utils/Images/perAcc.png';
import Tags from '../../Utils/Images/tags.png';

const Options: FC = () => {
    return (
        <div className={styles.optionsContainer}>
            <div className={styles.options}>
                <div className={styles.option}>
                    <div className={styles.icon}>
                        <img src={SOS} alt="SOS" className={styles.image} />
                    </div>
                    <h4 className={styles.hText}>Product Support</h4>
                    <p className={styles.pText}>
                        Up to 3 years on-site warranty available for your peace
                        of mind.
                    </p>
                </div>
                <div className={styles.option}>
                    <div className={styles.icon}>
                        <img
                            src={PerAcc}
                            alt="PersAcc"
                            className={styles.image}
                        />
                    </div>
                    <h4 className={styles.hText}>Personal Account</h4>
                    <p className={styles.pText}>
                        With big discounts, free delivery and a dedicated
                        support specialist.
                    </p>
                </div>
                <div className={styles.option}>
                    <div className={styles.icon}>
                        <img src={Tags} alt="SOS" className={styles.image} />
                    </div>
                    <h4 className={styles.hText}>Amazing Savings</h4>
                    <p className={styles.pText}>
                        Up to 70% off new Products, you can be sure of the best
                        price.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Options;
