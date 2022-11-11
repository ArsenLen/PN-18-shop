import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Filter from '../../components/Filter/Filter';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Info from '../../components/Info/Info';
import Product from '../../components/Product/Product';
import styles from './catalogpage.module.css'

const CatalogPage = () => {
    return (
        <div>
            <Breadcrumbs title="Shop" />
            <Filter />
            <div className={styles["products-wrapper"]}>
               
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <Info />
            <Footer />
        </div>
    );
};

export default CatalogPage;