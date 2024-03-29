import React, { useState, useEffect } from 'react';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import styles from './checkout.module.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const cardStyle = {
    style: {
      base: {
        color: "black",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "24px",
        "::placeholder": {
          color: "black"
        }
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
};


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("")
    const total = useSelector(state => state.product.total)

    useEffect(() => {
      axios.post("https://whispering-river-87788.herokuapp.com/api/create-payment-intent", {
        total
      })
        .then(res => setClientSecret(res.data.clientSecret))
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card : elements.getElement(CardElement)
            }
        })
          .then(res => console.log(res))
          .catch(err => console.log(err))
    }
    return (
      <>
      <Breadcrumbs />
      <div className={styles.wrapper}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <CardElement options={cardStyle} />
        <button>Pay</button>
      </form>
      {/* <h1>Вы купили продуктов на сумму: {total}</h1> */}
      <div className={styles["product-wrapper"]}>
        <p className={styles["product-title"]}> Product  <span>Subtotal</span> </p>
        <p className={styles["product-name"]}>  Asgaard sofa  <span>Rs. 250000</span> </p>
        <p className={styles["product-subtotal"]}>  Asgaard sofa  <span>Rs. 250000</span> </p>
        <p className={styles["product-total"]}> Total  <span>Rs. 250000</span> </p>
      </div>
      </div>
      </>
    );
};

export default CheckoutForm;