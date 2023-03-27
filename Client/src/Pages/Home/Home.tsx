import React from 'react';
import FeedBackSlider from '../../Components/sliders/feedBackSlider/FeedBackSlider';
import styles from './home.module.scss';
import ProductsSlider from "../../Components/sliders/productsSlider/ProductsSlider";

const Home = () => {
    return (
        <div className={styles.homePage}>
            <FeedBackSlider />
            <ProductsSlider category="New Products"/>
            <ProductsSlider category="New Products" />
            <FeedBackSlider />
        </div>
    );
};

export default Home;
