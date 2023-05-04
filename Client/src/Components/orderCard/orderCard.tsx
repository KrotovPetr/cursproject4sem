import React, {useEffect} from 'react';
import styles from "./orderCard.module.scss";

const OrderCard = (props: any) => {

    const handleSelectDirectionChange = async (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        await props.callback({idOrders: props.elem.idOrders, status: event.target.value});
    };

    useEffect(()=>{},[props.elem])

    return (
        <div className={styles.orderCard}>
            <div className={styles.header}>
                <h1 className={styles.cardHeader}> №{props.elem.idOrders}</h1>
                <p className={styles.status}>{props.elem.status}</p>
                <p className={styles.status}>{props.elem.price} &#8381;</p>
            </div>
            <div className={styles.selectorContainer}>
                <select onChange={handleSelectDirectionChange}>
                    <option defaultValue="" >--Please choose an option--</option>
                    <option value={"in work"}>In work</option>
                    <option value={"done"}>Done</option>
                    <option value={"cancelled"}>Cancelled</option>
                </select>
            </div>
        </div>
    );
};

export default OrderCard;