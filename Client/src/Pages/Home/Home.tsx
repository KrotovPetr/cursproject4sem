import React from 'react';
import FeedBackSlider from '../../Components/sliders/feedBackSlider/FeedBackSlider';
import styles from './home.module.scss';
import ProductsSlider from '../../Components/sliders/productsSlider/ProductsSlider';

const Home = () => {
    return (
        <div className={styles.homePage}>
            <ProductsSlider category="New Products" type={"tool"}/>
            <ProductsSlider category="Popular" type={"consumables"}/>
            <FeedBackSlider />
        </div>
    );
};

export default Home;
