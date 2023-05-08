import React, {useEffect, useState} from 'react';
import styles from './bar.module.scss';
import Logo from '../../../Utils/Images/logo2.png';
import { NavLink } from 'react-router-dom';
import {useAppSelector} from "../../../Store/Hooks/redux";
const Bar = () => {
    const url = useAppSelector(state=>state.goodReducer.url);

    const getURL = () =>{
       if(url === "tools"){
           return 0;
       }
        if(url === "service"){
            return 2;
        }
        if(url === "rent"){
            return 3;
        }
        if(url === ""){
            return 4;
        }
        return 5;
    }
    const [activePoint, setActive] = useState<number>(0);

    useEffect(()=>{
        setActive(getURL)
    },[url])

    return (
        <div className={styles.mainContainer}>
            <img className={styles.Logo} src={Logo} alt={"Logo"}/>
            <div
                className={
                    activePoint === 0 ? styles.activePoint : styles.point
                }
            >
                <NavLink
                    to="/tools"
                    className={styles.link}
                    onClick={(): void => {

                    }}
                >
                    Tools
                </NavLink>
            </div>
            <div
                className={
                    activePoint === 2 ? styles.activePoint : styles.point
                }
            >
                <NavLink
                    to="/service"
                    className={styles.link}
                    onClick={(): void => {

                    }}
                >
                    Service
                </NavLink>
            </div>
            <div
                className={
                    activePoint === 3 ? styles.activePoint : styles.point
                }
            >
                <NavLink
                    to="/rent"
                    className={styles.link}
                    onClick={(): void => {

                    }}
                >
                    Rent
                </NavLink>
            </div>
            <div
                className={
                    activePoint === 4 ? styles.activePoint : styles.point
                }
            >
                <NavLink
                    to="/"
                    className={styles.link}
                    onClick={(): void => {

                    }}
                >
                    Our deals
                </NavLink>
            </div>
        </div>
    );
};

export default Bar;
