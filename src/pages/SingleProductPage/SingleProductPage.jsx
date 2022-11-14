import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './singleproduct.module.css'
import productService from '../../services/products'
import SingleProductCard from "../../components/SingleProductCard/SingleProductCard"

const SingleProductPage = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        productService
            .getProduct(id)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <SingleProductCard
                img={product.img}
                title={product.title}
                descr={product.descr}
                price={product.price}
            />
        </div>
    );
};

export default SingleProductPage;