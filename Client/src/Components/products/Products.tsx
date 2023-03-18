import React, { FC, useEffect, useState } from 'react';
import styles from './products.module.scss';
import ProductCard from './productCard/ProductCard';
import { v4 as uuidv4 } from 'uuid';

type TProducts = {
    category?: string;
    hasCover: boolean;
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
    useEffect(() => {
        setLength(arr.length);
    }, [arr]);
    const [currentIndex, updateIndex] = useState<number>(0);
    const [length, setLength] = useState<number>(arr.length);

    return (
        <div className={styles.productsList}>
            {props.category && (
                <h3 className={styles.categoryHeader}>{props.category}</h3>
            )}
            <div className={styles.productSlider}>
                <button
                    onClick={() => {
                        if (currentIndex < length - 1) {
                            updateIndex((prevState) => prevState - 1);
                        }
                    }}
                    className={styles.leftArrow}
                >
                    &lt;
                </button>
                <div
                    className={styles.productsContainer}
                    style={{
                        right: `${30 * currentIndex}px`,
                        transition: `0.5s`,
                        zIndex: '0',
                    }}
                >
                    {props.hasCover && (
                        <ProductCard key={uuidv4()} elem={null} />
                    )}
                    {arr.map((product: any) => (
                        <ProductCard key={uuidv4()} elem={product} />
                    ))}
                </div>
                <button
                    onClick={() => {
                        if (currentIndex < length - 1) {
                            updateIndex((prevState) => prevState + 1);
                        }
                    }}
                    className={styles.rightArrow}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Products;
