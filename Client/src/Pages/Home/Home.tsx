import React from 'react';
import FeedBackSlider from '../../Components/sliders/feedBackSlider/FeedBackSlider';
import styles from './home.module.scss';
import ProductsSlider from '../../Components/sliders/productsSlider/ProductsSlider';
import { useAppSelector } from '../../Store/Hooks/redux';

const Home = () => {
    return (
        <div className={styles.homePage}>
            <ProductsSlider category="New Products" />
            <ProductsSlider category="Popular" />
            <FeedBackSlider />
        </div>
    );
};

export default Home;
