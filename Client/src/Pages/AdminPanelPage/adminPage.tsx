import React, {useEffect, useState} from 'react';
import styles from './admin.module.scss';
import {useFetchAllOrdersQuery, useUpdateOrderMutation} from "../../Store/ApiQuery/ordersService";
import OrderCard from "../../Components/orderCard/orderCard";
import { v4 as uuidv4 } from 'uuid';
import PersonCard from "../../Components/personCard/personCard";
import {useFetchAllUsersQuery} from "../../Store/ApiQuery/UserService";

const AdminPage = () => {
    const [status, checkStatus] = useState("");
    const [updateOrderStatus, {}] = useUpdateOrderMutation();
    const {data:fetchedData} = useFetchAllOrdersQuery(status);
    const {data:fetchedUser} = useFetchAllUsersQuery(100);
    console.log(fetchedUser)

    return (
        <div className={styles.adminPageContainer}>
            <div className={styles.adminPage}>
                <h1 className={styles.header}>Admin Page</h1>
                <h3>Orders</h3>
                {fetchedData && fetchedData.map((elem: any)=>{
                    return <OrderCard elem={elem} callback={updateOrderStatus} checkStatus={checkStatus} key={uuidv4()}/>
                })}
                <h3>Users</h3>
                {
                    fetchedUser && fetchedUser.map((elem:any)=>{
                        return <PersonCard/>
                    })
                }
            </div>
        </div>
    );
};

export default AdminPage;