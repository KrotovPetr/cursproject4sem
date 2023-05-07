import React, { useState } from 'react';
import styles from './bar.module.scss';
import Logo from '../../../Utils/Images/logo2.png';
import { NavLink } from 'react-router-dom';
const Bar = () => {
    const getURL = () =>{
        let URL = window.location.href;
        let URLArr = URL.split('/');
        switch(URLArr[3]){
            case "tools":  return 0; break;
            case "service": return 2; break;
            case "rent": return 3; break;
            case "": return 4; break;
            default: return 5;
        }
    }
    const [activePoint, setActive] = useState<number>(getURL);
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
                        setActive(0);
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
                        setActive(2);
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
                        setActive(3);
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
                        setActive(4);
                    }}
                >
                    Our deals
                </NavLink>
            </div>
        </div>
    );
};

export default Bar;
