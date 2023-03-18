import React from 'react';
import FeedBackSlider from '../../Components/sliders/feedBackSlider/FeedBackSlider';
import Slider from '../../Components/sliders/slider/Slider';
import styles from './home.module.scss';
import Products from '../../Components/products/Products';

const Home = () => {
    return (
        <div className={styles.homePage}>
            <Slider />
            <Products category="New Products" hasCover={false} />
            <Products hasCover={false} />
            <FeedBackSlider />
        </div>
    );
};

export default Home;
