import React, {useState} from 'react';
import styles from "./bar.module.scss";
const Bar = () => {
    const [activePoint, setActive] = useState<number>(0);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.Logo}></div>
            <div className={activePoint === 0 ? styles.activePoint: styles.point} onClick={():void=>{
                setActive(0)
            }}>Инструменты</div>
            <div className={activePoint === 1 ? styles.activePoint: styles.point}  onClick={():void=>{
                setActive(1)
            }}>Расходники</div>
            <div className={activePoint === 2 ? styles.activePoint: styles.point} onClick={():void=>{
                setActive(2)
            }}>Ремонт</div>
            <div className={activePoint === 3 ? styles.activePoint: styles.point} onClick={():void=>{
                setActive(3)
            }}>Аренда</div>
            <div className={activePoint === 4 ? styles.activePoint: styles.point} onClick={():void=>{
                setActive(4)
            }}>Предложения</div>
        </div>
    );
};

export default Bar;