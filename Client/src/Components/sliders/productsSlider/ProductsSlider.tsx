import React, { FC, useEffect, useState } from 'react';
import styles from './productsSlider.module.scss';
import SliderBox from '../sliderBox/sliderBox';
import { useFetchAllGoodsQuery} from "../../../Store/ApiQuery/goodsService";
import {useAppDispatch, useAppSelector} from "../../../Store/Hooks/redux";
import {setAllGoods} from "../../../Store/Reducers/goodSlice/goodSlice";

type TProducts = {
    category?: string;
    hasCover?: boolean;
};

const ProductsSlider: FC<TProducts> = (props) => {
    const {data} = useFetchAllGoodsQuery(100);
    const goods = useAppSelector(state=>state.goodReducer.goods);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        console.log(data)
        dispatch(setAllGoods(data));
    },[data])

    useEffect(()=>{},[goods])


    return (
        <div className={styles.productsList}>
            <h1 className={styles.categoryHeader}>{props.category}</h1>
            <SliderBox arr={goods} />
        </div>
    );
};

export default ProductsSlider;
