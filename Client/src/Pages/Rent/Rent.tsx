import React, { FC } from 'react';
import styles from './rent.module.scss';
import RentCard from './RentCard/RentCard';
import { v4 as uuidv4 } from 'uuid';
import {useAppSelector} from "../../Store/Hooks/redux";
import ProductCard from "../../Components/productCard/ProductCard";
const Rent: FC = () => {
    const goods = useAppSelector(state=>state.goodReducer.goods);

    return (
        <div className={styles.rent}>
            <div className={styles.content}>
                {goods.filter((elem: any)=>elem.type==="rent").map((elem:any) => {
                    return <ProductCard key={uuidv4()} elem={elem}/>;
                })}
            </div>
        </div>
    );
};

export default Rent;
