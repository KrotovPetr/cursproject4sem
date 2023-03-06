import React from 'react';
import FeedBackSlider from '../../Components/Sliders/FeedBackSlider/FeedBackSlider';
import Slider from '../../Components/Sliders/Slider/Slider';
import styles from './home.module.scss';
import Products from '../../Components/Products/Products';

const Home = () => {
    return (
        <div className={styles.homePage}>
            <Slider />
            <Products category="New Products" />
            <Products />
            <FeedBackSlider />
        </div>
    );
};

export default Home;
