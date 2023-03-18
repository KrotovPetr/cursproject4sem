import React, { useState } from 'react';
import styles from './bar.module.scss';
import Logo from '../../../Utils/Images/logo2.png';
import { NavLink } from 'react-router-dom';
const Bar = () => {
    const [activePoint, setActive] = useState<number>(4);
    return (
        <div className={styles.mainContainer}>
            <img className={styles.Logo} src={Logo}></img>
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
                    activePoint === 1 ? styles.activePoint : styles.point
                }
            >
                <NavLink
                    to="/supplies"
                    className={styles.link}
                    onClick={(): void => {
                        setActive(1);
                    }}
                >
                    Supplies
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
