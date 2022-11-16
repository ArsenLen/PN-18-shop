import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import styles from './singleproductcard.module.css'
import { addToCart } from '../../redux/productSlice'

const SingleProductCard = ({ product, img, title, price, descr }) => {
    console.log(product)
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const handleAdd = (type) => {
        if(type == "plus") {
            setQuantity(quantity + 1) // quantity++, quantity = quantity + 1
        } else {
            quantity > 1 && setQuantity(quantity - 1)
        }
    } 

    const handleAddProduct = () => {
        dispatch(addToCart({...product, quantity}))
    }
    return (
        <div className={styles.card}>
            <div className={styles.wrapper}>
                <div className={styles["img-wrapper"]}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.info}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.price}>{price}</p>
                    <p className={styles.descr}>{descr}</p>
                    <div className={styles["control-wrapper"]}>
                        <div className={styles.quantity}>
                            <button onClick={() => handleAdd("min")} className={styles["quantity-control"]}>-</button> 
                                <span>{quantity}</span>
                            <button onClick={() => handleAdd("plus")} className={styles["quantity-control"]}>+</button>
                        </div>
                        <button onClick={handleAddProduct} className={styles.add}>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;