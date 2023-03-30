import React from 'react';
import styles from './sliderBox.module.scss';
import {StyledSlider} from "../styledSlider/styledSlider";
import ProductCard from "../../productCard/ProductCard";
import {v4 as uuidv4} from "uuid";

const SliderBox = (props: any) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
    };

    return (
    <div className={styles.slider}>
            <StyledSlider {...settings}>
                {props.arr && props.arr.map((product: any) => (
                    <ProductCard key={uuidv4()} elem={product} />
                ))}
            </StyledSlider>
    </div>);
};

export default SliderBox;
