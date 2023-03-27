import React, { FC, useEffect, useState } from 'react';
import styles from './productsSlider.module.scss';
import SliderBox from "../sliderBox/sliderBox";

type TProducts = {
    category?: string;
    hasCover?: boolean;
};


const ProductsSlider: FC<TProducts> = (props) => {
    let arr = [
        'Носки',
        'Штаны',
        'Носки',
        'Штаны',
        'Носки',
        'Штаны',
        'Носки',
        'Штаны',
        'Носки',
        'Штаны',
    ];


    return (
        <div className={styles.productsList}>
            <h1 className={styles.categoryHeader}>{props.category}</h1>
            <SliderBox arr={arr}/>
        </div>
    );
};

export default ProductsSlider;
