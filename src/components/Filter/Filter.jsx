import React from 'react';
import styles from './filter.module.css'

const Filter = () => {
    return (
        <div className={styles.filter}>
            <div className={styles.wrapper}>
                <div className={styles["icon-wrapper"]}>
                    <img src="/images/filter-icon.png" alt="" />
                    <p className={styles["filter-text"]}>Filter</p>
                    <p className={styles["amount-text"]}>Showing 1-16 of 32 results</p>
                </div>
                <div className={styles.controls}>
                    <p className={styles.amount}>
                        Show
                        <input type="number" className={styles["amount-number"]}/>    
                    </p>
                    <p>
                        Sort by 
                        <select name="" id="">
                            <option value="" selected>Newest</option>
                            <option value="">Price</option>
                        </select>
                    </p>    
                </div>    
            </div>
        </div>
    );
};

export default Filter;