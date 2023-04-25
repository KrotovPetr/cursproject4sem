import React, { FC } from 'react';
import styles from './productCard.module.scss';
import Lobzik from '../../Utils/Images/lobzik.jpg';
const ProductCard: FC<any> = (props) => {
    return (
        <div className={styles.cardBody}>
            <div className={styles.statusInStock}>
                <div className={styles.iconBackgroundInStock}>
                    <img alt={styles.icon} />
                </div>
                <p className={styles.statusText}> In Stock</p>
            </div>
            <img src={"data:image/png;base64," +  props.elem.image} alt="good" className={styles.cardPicture} />
            <div className={styles.feedbackContainer}>
                <div className={styles.stars}> </div>
                <p className={styles.reviews}> Reviews (0)</p>
            </div>
            <p className={styles.productName}>
                {props.elem.name}
            </p>
            <p className={styles.productPrice}>{props.elem.price} &#8381;</p>
        </div>
    );
};

export default ProductCard;
