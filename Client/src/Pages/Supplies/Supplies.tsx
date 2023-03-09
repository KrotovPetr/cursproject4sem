import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../Services/Hooks/redux";
import {fetchUserData} from "../../Services/Actions/actions";
import {userAPI} from "../../Services/ApiQuery/UserService";

const Supplies = ():JSX.Element => {
    const dispatch = useAppDispatch();
    const {userData} = useAppSelector(state => state.userReducer);
    const {data: any} = userAPI.useFetchUserDataQuery('');

    useEffect(()=>{
        dispatch(fetchUserData());
    }, [])
    useEffect(()=>{
        console.log(userData)
    }, [userData])

    return (<div> hello <h1>{ userData === null ? "hello" : userData.payload.title}</h1></div>);
};

export default Supplies;
