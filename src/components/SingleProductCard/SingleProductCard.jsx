import React, {useState} from 'react';
import styles from './singleproductcard.module.css'

const SingleProductCard = (props) => {
    const [quantity, setQuantity] = useState(1)
    return (
        <div className={styles.card}>
            <div className={styles.wrapper}>
                <div className={styles["img-wrapper"]}>
                    <img src={props.img} alt="" />
                </div>
                <div className={styles.info}>
                    <h1 className={styles.title}>{props.title}</h1>
                    <p className={styles.price}>{props.price}</p>
                    <p className={styles.descr}>{props.descr}</p>
                    <div className={styles.quantity}>
                        <button className={styles["quantity-control"]}>-</button> 
                            {quantity} 
                        <button className={styles["quantity-control"]}>+</button>
                    </div>
                    <button className={styles.add}>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;