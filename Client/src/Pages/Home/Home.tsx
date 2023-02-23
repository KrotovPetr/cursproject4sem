import React from 'react';
import Slider from "../../Components/Sliders/Slider/Slider";
import styles from "./home.module.scss"
import Options from "../../Components/Options/Options";
import FeedBackSlider from "../../Components/Sliders/FeedBackSlider/FeedBackSlider";

const Home = () => {
    return (
        <div className={styles.homePage}>
           <Slider/>
            {/*<Menu/>*/}
            <FeedBackSlider/>
            <Options/>
        </div>
    );
};

export default Home;