import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../services/products';
import styles from './product.module.css'

const Product = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.img} alt="" className={styles.img} />
            <Link to={`/product/${props.id}`} className={styles.name}>
               {props.title}
            </Link>
            <h4 className={styles.price}>
                {props.price} KGS
            </h4>
            <p>{new Date(props.date).toString()}</p>
        </div>
    );
};

export default Product;