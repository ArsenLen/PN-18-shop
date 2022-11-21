import React from 'react';
import styles from './filter.module.css'

const Filter = ({sort, sortHandle}) => {

    const handleSelect = (e) => {
        // выбор option. e.target.value - это value выбранного option 
        sortHandle(e.target.value)
    }
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
                        <select value={sort} onChange={e => handleSelect(e)}>
                            <option value="newest">Newest</option>
                            <option value="price">Price</option>
                        </select>
                    </p>    
                </div>    
            </div>
        </div>
    );
};

export default Filter;