import React from 'react';
import styles from './tools.module.scss';
import ProductsSlider from "../../Components/sliders/productsSlider/ProductsSlider";

const Tools = () => {
    return (
        <div className={styles.toolsPage}>
            <div className={styles.toolsContent}>
                <ProductsSlider category="New Products" type={"tool"}/>
                <ProductsSlider category="New Products" type={"tool"}/>
            </div>
        </div>
    );
};

export default Tools;
