import React from 'react';
import styles from './accountBlock.module.scss';
import AccountOption from "../accountOptions/accountOption";

const AccountDataBlock = () => {
    const options = [
        "Account Information",
        "Account Information",
        "Account Information",
        "Account Information",
        "Account Information",
        "Account Information",
    ]
    return (
        <div className={styles.accountContentBlock}>
            <div className={styles.options}>
                {
                    options.map((elem)=>{
                        return <AccountOption header={elem}/>
                    })
                }
            </div>
        </div>
    );
};

export default AccountDataBlock;