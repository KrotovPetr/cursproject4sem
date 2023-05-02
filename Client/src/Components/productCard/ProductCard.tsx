import React, { FC } from 'react';
import styles from './productCard.module.scss';
import Lobzik from '../../Utils/Images/lobzik.jpg';
import {useAppDispatch, useAppSelector} from "../../Store/Hooks/redux";
import {addGoodToCart, deleteFromCurrentCart} from "../../Store/Reducers/goodSlice/goodSlice";
const ProductCard: FC<any> = (props) => {
    const dispatch = useAppDispatch();
    const {currentCart, totalPrice} = useAppSelector(state=> state.goodReducer);
    const deleteCurrentPosition = () =>{
        let index = currentCart.indexOf(props.elem)
        let newPrice = totalPrice - props.elem.price;
        let newCart = [...currentCart.slice(0, index),...currentCart.slice(index+1, currentCart.length)];

        dispatch(deleteFromCurrentCart({newCart, newPrice}))
    }

    return (
        <div className={styles.cardBody}>
            <div className={styles.statusInStock}>
                   <div className={styles.statusText}> In Stock</div>
                <div className={styles.delete} onClick={deleteCurrentPosition}> &times;</div>
            </div>
            <img src={"data:image/png;base64," +  props.elem.image} alt="good" className={styles.cardPicture} />
            <div className={styles.feedbackContainer}>
                <div className={styles.stars}> {(Math.floor(Math.random()*3+2))} &#9885;</div>
                <p className={styles.reviews}> Reviews (0)</p>
            </div>
            <p className={styles.productName}>
                {props.elem.name}
            </p>
            <div className={styles.lowLevel}><p className={styles.productPrice}>{props.elem.price} &#8381;</p><div className={styles.addDiv} onClick={()=>{dispatch(addGoodToCart(props.elem))}}>Add to cart...</div></div>
        </div>
    );
};

export default ProductCard;
