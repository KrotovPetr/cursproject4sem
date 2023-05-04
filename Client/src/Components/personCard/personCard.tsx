import React from 'react';
import styles from './personCard.module.scss';
const PersonCard = (props:any) => {
    const handleSelectDirectionChange = async (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        await props.callback({email: props.elem.email, isBanned: event.target.value});
    };
    return (
        <div className={styles.personCard}>
            <h1 className={styles.name}>{props.elem.firstName} {props.elem.lastName}</h1>
            <p className={styles.pText}>Email: {props.elem.email}</p>
            <p className={styles.pText}>Phone: {props.elem.phone}</p>
            <p className={styles.pText}>Role: {props.elem.role === 0 ? "Admin" : "User"}</p>
            <p className={styles.pText}>Status: {props.elem.isBanned ? "Banned" : "Active"}</p>
            {props.elem.role === 1 && <select onChange={handleSelectDirectionChange}>
                <option defaultValue="" >--Please choose an option--</option>
                <option value={1}>Banned</option>
                <option value={0}>Active</option>
            </select>}
        </div>
    );
};

export default PersonCard;