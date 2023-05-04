import React from 'react';
import styles from './admin.module.scss';
import {useFetchAllOrdersQuery, useUpdateOrderMutation} from "../../Store/ApiQuery/ordersService";
import OrderCard from "../../Components/orderCard/orderCard";
import { v4 as uuidv4 } from 'uuid';
import PersonCard from "../../Components/personCard/personCard";
import {useChangeUserBanMutation, useFetchAllUsersQuery} from "../../Store/ApiQuery/UserService";

const AdminPage = () => {
    const [updateOrderStatus, {}] = useUpdateOrderMutation();
    const [changeBan, {}] = useChangeUserBanMutation();
    const {data:fetchedData} = useFetchAllOrdersQuery(100);
    const {data:fetchedUser} = useFetchAllUsersQuery(100);

    return (
        <div className={styles.adminPageContainer}>
            <div className={styles.adminPage}>
                <h1 className={styles.header}>Admin Page</h1>
                <h3>Orders</h3>
                {fetchedData && fetchedData.map((elem: any)=>{
                    return <OrderCard elem={elem} callback={updateOrderStatus} key={uuidv4()}/>
                })}
                <h3>Users</h3>
                {
                    fetchedUser && fetchedUser.map((elem:any)=>{
                        return <PersonCard elem={elem}  key={uuidv4()} callback={changeBan}/>
                    })
                }
            </div>
        </div>
    );
};

export default AdminPage;