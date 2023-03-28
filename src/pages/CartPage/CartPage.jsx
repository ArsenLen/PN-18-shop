import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import CartProduct from '../../components/CartProduct/CartProduct';
import styles from './cartpage.module.css'

//4242 4242 4242 4242

const CartPage = () => {
    const products = useSelector(state => state.product.products)
    const total = useSelector(state => state.product.total)
    return (
      <>
        <Breadcrumbs title="Cart" />
        <section className={styles.cart}>
          <div className={styles.wrapper}>
            <div className={styles.products}>
              <div className={styles.header}>
                <p className={styles.name}></p>
                <p className={styles.name}>Product</p>
                <p className={styles.name}>Price</p>
                <p className={styles.name}>Quantity</p>
                <p className={styles.name}>Subtotal</p>
                <p className={styles.name}></p>
              </div>
              {products.map((product) => {
                return (
                  <CartProduct
                    key={product.id}
                    img={product.img}
                    title={product.title}
                    price={product.price}
                    quantity={product.quantity}
                  />
                );
              })}
            </div>
            <div className={styles.totals}>
              <h3 className={styles.title}>Cart totals</h3>
              <p className={styles.subtotal}>
                Subtotal <span>{total}</span>
              </p>
              <p className={styles.total}>
                Total <span>{total}</span>
              </p>
              <Link to="/checkout" className={styles.checkout}>Check Out</Link>
            </div>
          </div>
        </section>
      </>
    );
};

export default CartPage;