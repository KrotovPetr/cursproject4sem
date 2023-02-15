import React, {FC} from 'react';
import styles from './headerTop.module.scss';
const HeaderTop: FC = () => {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.infoContainer}>
                <div className={styles.shedule}>

                </div>
                <div className={styles.address}>

                </div>
                <div className={styles.contacts}>

                </div>
            </div>
        </div>
    );
};

export default HeaderTop;