import React, { FC } from 'react';
import styles from './productCard.module.scss';
import Lobzik from '../../Utils/Images/lobzik.jpg';
const ProductCard: FC<any> = () => {
    return (
        <div className={styles.cardBody}>
            <div className={styles.statusInStock}>
                <div className={styles.iconBackgroundInStock}>
                    <img alt={styles.icon} />
                </div>
                <p className={styles.statusText}> In Stock</p>
            </div>
            <img src={Lobzik} alt="lobzik" className={styles.cardPicture} />
            <div className={styles.feedbackContainer}>
                <div className={styles.stars}> </div>
                <p className={styles.reviews}> Reviews (4)</p>
            </div>
            <p className={styles.productName}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis dignissimos laborum nam obcaecati omnis perspiciatis
                porro quo. Ducimus, molestias quis.
            </p>
            <p className={styles.productPrice}>900 &#8381;</p>
        </div>
    );
};

export default ProductCard;
