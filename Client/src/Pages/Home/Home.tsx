import React from 'react';
import Slider from "../../Components/Slider/Slider";
import styles from "./home.module.scss"

const Home = () => {
    return (
        <div className={styles.homePage}>
           <Slider/>
        </div>
    );
};

export default Home;