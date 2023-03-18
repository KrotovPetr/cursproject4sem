import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './headerBody.module.scss';
import Bar from '../Bar/Bar';
import Loop from '../../../Utils/Images/Loop.png';
import Basket from '../../../Utils/Images/basket.png';
import User from '../../../Utils/Images/user.png';
const HeaderBody: FC = () => {
    const navigate = useNavigate();

    const toLogin = ()=>{
        navigate('/login')
    }

    const toBasket = ()=>{
        navigate('/basket')
    }

    const toSearchPage = ()=>{
        navigate('/search')
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <Bar />
                <div className={styles.functions}>
                    <img src={Loop} className={styles.image} alt={'loop'} onClick={toBasket}/>
                    <img src={Basket} className={styles.image} alt={'basket'} onClick={toBasket}/>
                    <img src={User} className={styles.image} alt={'user'} onClick={toLogin}/>
                </div>
            </div>
        </div>
    );
};

export default HeaderBody;
