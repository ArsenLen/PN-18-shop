import React, { useState, useEffect } from 'react';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import styles from './checkout.module.css'
import axios from 'axios';
import { useSelector } from 'react-redux';

const cardStyle = {
    style: {
      base: {
        color: "white",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "white"
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
      <h1>Вы купили продуктов на сумму: {total}</h1>
      <form className={styles.card} onSubmit={handleSubmit}>
        <CardElement options={cardStyle} />
        <button>Submit</button>
        {
          user?.status === "seller" && <Link></Link>
        }
      </form>
      </>
    );
};

export default CheckoutForm;