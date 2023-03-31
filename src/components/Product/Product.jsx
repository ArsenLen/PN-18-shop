import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../services/products';
import styles from './product.module.css'

const Product = (props) => {
    console.log(props.gridView)
    return (
        <div className={props.gridView ? styles.card : styles["card-list"]}>
            <img src={props.img} alt="" className={styles.img} />
            <div className={styles.info}>
                <Link to={`/product/${props.id}`} className={styles.name}>
                {props.title}
                </Link>
                <h4 className={styles.price}>
                    {props.price} KGS
                </h4>
                <p>{new Date(props.date).toString()}</p>
            </div>
        </div>
    );
};

export default Product;