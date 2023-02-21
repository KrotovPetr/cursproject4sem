import React, {FC} from 'react';
import styles from "./headerBody.module.scss"
import Bar from "../Bar/Bar";
import Loop from '../../../Utils/Images/Loop.png';
import Basket from '../../../Utils/Images/basket.png';
import User from '../../../Utils/Images/user.png';
const HeaderBody:FC = () => {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
               <Bar/>
               <div className={styles.functions}>
                   <img src={Loop} className={styles.image} alt={"loop"}/>
                   <img src={Basket} className={styles.image} alt={"basket"}/>
                   <img src={User} className={styles.image} alt={"user"}/>
               </div>
            </div>

        </div>
    );
};

export default HeaderBody;