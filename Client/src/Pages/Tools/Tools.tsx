import React from 'react';
import styles from './tools.module.scss';
import Products from '../../Components/sliders/productsSlider/ProductsSlider';

const Tools = () => {
    return (
        <div className={styles.toolsPage}>
            <div className={styles.toolsContent}>
                <Products
                    category={'Conventional Equipment'}
                    hasCover={false}
                />
                <Products category={'Pro Equipment'} hasCover={false} />
            </div>
        </div>
    );
};

export default Tools;
