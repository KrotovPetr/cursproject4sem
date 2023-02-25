import React from 'react';
import styles from './checkbox.module.scss';

const Checkbox = () => {
    return (
        <div className={styles.checkbox}>
            <input
                type="checkbox"
                id="horns"
                name="horns"
                className={styles.input}
            />
            <label htmlFor="horns" className={styles.label}>
                I read and agree with documents
                <span className={styles.labelSpan}>*</span>
            </label>
        </div>
    );
};

export default Checkbox;
