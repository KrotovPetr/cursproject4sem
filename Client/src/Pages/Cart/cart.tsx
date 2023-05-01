import React from 'react';
import styles from './cart.module.scss';
import {useAppSelector} from "../../Store/Hooks/redux";
import ProductCard from "../../Components/productCard/ProductCard";
import { v4 as uuidv4 } from 'uuid';
import Button from "../../Components/button/Button";
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const {currentCart, totalPrice} = useAppSelector((state)=>state.goodReducer)
    const isLogin = useAppSelector((state) => state.userReducer.isLogin)
    const navigate = useNavigate();
    const filterOrder = () =>{
        if(isLogin){
            console.log(1);
        } else {
            navigate("/login");
        }
    }
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