import React, { FC } from 'react';
import styles from '../sliderBox/sliderBox.module.scss';
import { StyledSlider } from '../styledSlider/styledSlider';
import FeedBackSlide from './feedBackSlide/feedBackSlide';
import { v4 as uuidv4 } from 'uuid';

const FeedBackSlider: FC = () => {
    const arr = [
        {
            author: 'MickleOne',
            product: 'Hammer',
            text: 'Я бы дал этому продукту оценку в 4 звезды. Я доволен качеством, но есть некоторые мелкие проблемы, которые мешают мне дать ему 5 звезд.',
        },
        {
            author: 'MickleOne',
            product: 'Hammer',
            text: 'Я бы дал этому продукту оценку в 4 звезды. Я доволен качеством, но есть некоторые мелкие проблемы, которые мешают мне дать ему 5 звезд.',
        },
        {
            author: 'MickleOne',
            product: 'Hammer',
            text: 'Я бы дал этому продукту оценку в 4 звезды. Я доволен качеством, но есть некоторые мелкие проблемы, которые мешают мне дать ему 5 звезд.',
        },
        {
            author: 'MickleOne',
            product: 'Hammer',
            text: 'Я бы дал этому продукту оценку в 4 звезды. Я доволен качеством, но есть некоторые мелкие проблемы, которые мешают мне дать ему 5 звезд.',
        },
        {
            author: 'MickleOne',
            product: 'Hammer',
            text: 'Я бы дал этому продукту оценку в 4 звезды. Я доволен качеством, но есть некоторые мелкие проблемы, которые мешают мне дать ему 5 звезд.',
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: true,
        arrows: false,
    };
    return (
        <div className={styles.slider}>
            <StyledSlider {...settings}>
                {arr.map((product: any) => (
                    <FeedBackSlide key={uuidv4()} data={product} />
                ))}
            </StyledSlider>
        </div>
    );
};

export default FeedBackSlider;
