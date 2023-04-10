import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const StyledSlider = styled(Slider)`
    width: 100%;
    height: fit-content;
    box-sizing: border-box;

    .slick-arrow {
        background: #666666;
        width: 30px;
        height: 40px;
        opacity: 0.2;
        transition: 1s;
        border-radius: 0;
        z-index: 2;
    }

    .slick-arrow:hover {
        opacity: 0.3;
        transition: 1s;
    }

    .slick-next {
        border-radius: 50% 0 0 50%;
    }

    .slick-prev {
        border-radius: 0 50% 50% 0;
    }
`;
