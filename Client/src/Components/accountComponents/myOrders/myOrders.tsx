import React, {useEffect} from 'react';
import styles from './myOrders.module.scss';
import {useFetchAllCurrentOrdersQuery} from "../../../Store/ApiQuery/ordersService";
import { v4 as uuidv4 } from 'uuid';
const MyOrders = () => {
    const {data} = useFetchAllCurrentOrdersQuery(11);
    useEffect(()=>{
    },[data])
    return (
        <div className={styles.myOrdersContainers}>
            <h1 className={styles.header}>My Orders</h1>
            <hr className={styles.line}/>
            <div className={styles.ordersContainer}>{
                data && data[0].length > 0 && data[0].map((elem: any)=>{
                    return <div className={styles.orderCard} key={uuidv4()}>
                        <h3 className={styles.orderHeader}>{elem.idOrders}</h3>
                        <p className={styles.orderStatus}>Status: {elem.status}</p>
                        <p className={styles.orderPrice}>Total: {elem.price}</p>
                    </div>
                })
            }</div>
        </div>
    );
};

export default MyOrders;