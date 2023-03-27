import React from 'react';
import styles from './slide.module.scss'
import Promo from '../../../../Utils/Images/Promo/promo1.jpg';
const FeedBackSlide = (props: any) => {
    return (
        <div className={styles.slideBody}>
            <img src={Promo} className={styles.promoImage} alt="promo alt"></img>
        </div>
    );
};

export default FeedBackSlide;