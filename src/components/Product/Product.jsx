import React from 'react';
import styles from './product.module.css'

const Product = () => {
    return (
        <div className={styles.card}>
            <img src="https://whispering-river-87788.herokuapp.com/images/asgaard-sofa.png" alt="" className={styles.img} />
            <p className={styles.name}>
                Trenton modular sofa_3
            </p>
            <h4 className={styles.price}>
                Rs. 25,000.00
            </h4>
        </div>
    );
};

export default Product;