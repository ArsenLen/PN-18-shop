import React from 'react';
import styles from './breadcrumbs.module.css'

const Breadcrumbs = (props) => {
    return (
        <div className={styles.wrapper}>
            <img src="/images/breadcrumb-logo.png" alt="" className={styles.icon} />
            <h1>Shop {/*{props.title} */}</h1>
            <p className={styles.breadcrumb}>Home &#8594; Shop</p>
        </div>
    );
};

export default Breadcrumbs;