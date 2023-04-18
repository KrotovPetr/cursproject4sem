import React from 'react';
import styles from './myOrders.module.scss';
const MyOrders = () => {
    const orders = [1124, 17,12508,99];

    return (
        <div className={styles.myOrdersContainers}>
            <h1 className={styles.header}>My Orders</h1>
            <hr className={styles.line}/>
            <div className={styles.ordersContainer}>{
                orders.map((elem)=>{
                    return <div className={styles.orderCard}>
                        <h3 className={styles.orderHeader}>{elem}</h3>
                        <p className={styles.orderStatus}>Status: In progress</p>
                        <p className={styles.orderPrice}>Total: 1123 </p>
                    </div>
                })
            }</div>
        </div>
    );
};

export default MyOrders;