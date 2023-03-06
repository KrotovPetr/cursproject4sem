import React, { FC } from 'react';
import styles from './products.module.scss';
import ProductCard from './ProductCard/ProductCard';
import { v4 as uuidv4 } from 'uuid';

type TProducts = {
    category?: string;
};
const Products: FC<TProducts> = (props) => {
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
            {props.category && (
                <h3 className={styles.categoryHeader}>{props.category}</h3>
            )}
            <div className={styles.productsContainer}>
                {arr.map((product: any) => (
                    <ProductCard key={uuidv4()} elem={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
