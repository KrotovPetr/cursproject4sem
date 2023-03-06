import React, { useState } from 'react';
import styles from './bar.module.scss';
import Logo from '../../../Utils/Images/logo2.png';
import {Link, NavLink} from "react-router-dom";
const Bar = () => {
    const [activePoint, setActive] = useState<number>(0);
    return (
        <div className={styles.mainContainer}>
            <img className={styles.Logo} src={Logo}></img>
            <div
                className={
                    activePoint === 0 ? styles.activePoint : styles.point
                }
                onClick={(): void => {
                    setActive(0);
                }}
            >
                <NavLink to="/tools" className={styles.link}>Tools</NavLink>
            </div>
            <div
                className={
                    activePoint === 1 ? styles.activePoint : styles.point
                }
                onClick={(): void => {
                    setActive(1);
                }}
            >
                <NavLink to="/supplies" className={styles.link}>Supplies</NavLink>
            </div>
            <div
                className={
                    activePoint === 2 ? styles.activePoint : styles.point
                }
                onClick={(): void => {
                    setActive(2);
                }}
            >
                <NavLink to="/service" className={styles.link}>Service</NavLink>
            </div>
            <div
                className={
                    activePoint === 3 ? styles.activePoint : styles.point
                }
                onClick={(): void => {
                    setActive(3);
                }}
            >
                <NavLink to="/rent" className={styles.link}>Rent</NavLink>
            </div>
            <div
                className={
                    activePoint === 4 ? styles.activePoint : styles.point
                }
                onClick={(): void => {
                    setActive(4);
                }}
            >
                <NavLink to="/" className={styles.link}>Our deals</NavLink>
            </div>
        </div>
    );
};

export default Bar;
