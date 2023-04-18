import React from 'react';
import styles from "./newsSub.module.scss";
import {Checkbox, FormControlLabel} from "@mui/material";

const NewsSubscription = () => {
    return (
        <div className={styles.newsLetterSub}>
            <h1 className={styles.header}>Newsletter Subscription</h1>
            <hr className={styles.line}/>
            <div className={styles.checkboxContainer}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Promo subscription" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Fixes subscription" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Order notions" />
            </div>

        </div>
    );
};

export default NewsSubscription;