import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Filter from '../../components/Filter/Filter';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Info from '../../components/Info/Info';
import Product from '../../components/Product/Product';
import styles from './catalogpage.module.css'
import productService from '../../services/products'

const CatalogPage = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        productService
            .getProducts()
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])
    console.log(products);
    return (
        <div>
            <Breadcrumbs title="Shop" />
            <Filter />
            <div className={styles["products-wrapper"]}>
                { products.map(product => {
                   return <Product
                        key={product._id}
                        id={product._id}
                        img={product.img}
                        title={product.title}
                        descr={product.descr}
                        price={product.price}
                    />
                }) }
            </div>
            <Info />
            <Footer />
        </div>
    );
};

export default CatalogPage;