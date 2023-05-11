import React, {useEffect, useRef, useState} from 'react';
import styles from './cart.module.scss';
import {useAppDispatch, useAppSelector} from "../../Store/Hooks/redux";
import ProductCard from "../../Components/productCard/ProductCard";
import { v4 as uuidv4 } from 'uuid';
import Button from "../../Components/button/Button";
import {useNavigate} from "react-router-dom";
import {useCreateNewOrderMutation} from "../../Store/ApiQuery/ordersService";
import {clearCart} from "../../Store/Reducers/goodSlice/goodSlice";
import {getCookie} from "../../Utils/Functions/getCookie";
import {useFetchAllServiceQuery} from "../../Store/ApiQuery/serviceService";

const Cart = () => {
    const {data} = useFetchAllServiceQuery(100);
    const [selectValue, setSelectValue] = useState("1");
    useEffect(()=>{},[data])
    const {currentCart, totalPrice} = useAppSelector((state)=>state.goodReducer)
    const { isLogin} = useAppSelector(state=>state.userReducer);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const filterOrder = () =>{
        console.log(selectValue)
        if(isLogin){
            const indexArr = currentCart.map((elem:any)=>{
                return elem.idGood;
            })
            let currentDate = new Date();
            let id = getCookie("userData")?.split(" ")[3];
            if(indexArr.length>0){
                createNewOrder({date: currentDate, status: "In work", price: totalPrice, type: "self", productsIds: indexArr, idUser: id, idService: Number(selectValue)})
                dispatch(clearCart());
            } else {
                alert("Cart is empty!");
            }

        } else {
            navigate("/login");
        }
    }
    const [createNewOrder, {}] = useCreateNewOrderMutation();
    useEffect(()=>{},[currentCart])
    return (
        <div className={styles.cart}>
          <h1 className={styles.cartHeader}>Cart</h1>
          <div className={styles.goodContainer}>
              {currentCart.map((elem:any)=>{
                  return <ProductCard key={uuidv4()} elem={elem}/>
              })}
          </div>
            <div className={styles.lowLevel}>
                <select onChange={(e=>setSelectValue(e.target.value))}>
                    {data && data.map((elem: any, index: number)=>{
                        return <option value={elem.idService} key={index}>{elem.address}</option>
                    })}
                </select>
                <div className={styles.totalPrice}>Price: {totalPrice} &#8381;</div><div className={styles.button} onClick={filterOrder}><Button butContent={"Pay"}/></div></div>
        </div>
    );
};

export default Cart;