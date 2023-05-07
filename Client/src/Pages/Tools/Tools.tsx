import React from 'react';
import styles from './tools.module.scss';
import ProductsSlider from "../../Components/sliders/productsSlider/ProductsSlider";

const Tools = () => {
    return (
        <div className={styles.toolsPage}>
            <div className={styles.toolsContent}>
                <ProductsSlider category="Tools" type={"tool"}/>
                <ProductsSlider category="Consumables" type={"consumables"}/>
            </div>
        </div>
    );
};

export default Tools;
