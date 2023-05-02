import React, {useEffect} from 'react';
import styles from './cart.module.scss';
import {useAppSelector} from "../../Store/Hooks/redux";
import ProductCard from "../../Components/productCard/ProductCard";
import { v4 as uuidv4 } from 'uuid';
import Button from "../../Components/button/Button";
import {useNavigate} from "react-router-dom";
import {useCreateNewOrderMutation} from "../../Store/ApiQuery/ordersService";

const Cart = () => {
    const {currentCart, totalPrice} = useAppSelector((state)=>state.goodReducer)
    const {userData, isLogin} = useAppSelector(state=>state.userReducer);
    const navigate = useNavigate();
    const filterOrder = () =>{
        if(isLogin){
            const indexArr = currentCart.map((elem:any)=>{
                return elem.idGood;
            })
            createNewOrder({date: "2016-06-25T07:06:21 -03:00", status: "In work", price: totalPrice, type: "self", productsIds: indexArr, idUser: "11"})
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
            <div className={styles.lowLevel}><div className={styles.totalPrice}>Price: {totalPrice} &#8381;</div><div className={styles.button} onClick={()=>{
                filterOrder();
            }}><Button butContent={"Pay"}/></div></div>
        </div>
    );
};

export default Cart;