import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Filter from '../../components/Filter/Filter';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Info from '../../components/Info/Info';
import Product from '../../components/Product/Product';
import styles from './catalogpage.module.css'
import productService from '../../services/products'
import ReactPaginate from 'react-paginate';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [sorted, setSorted] = useState("price");
  const [gridView, setGridView] = useState(true);
  
  const itemsPerPage = 4
  const [currentItems, setCurrentItems] = useState([])

  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    const endOffset = newOffset + itemsPerPage;
    let currentProducts
    if(sorted === "price") {
        currentProducts = products.slice(newOffset, endOffset).sort((a, b) => {
            return a.price - b.price;
        })
    } else {
        currentProducts = products.slice(newOffset, endOffset).sort((a, b) => {
            return new Date(a.createdAt) - new Date(b.createdAt);
        })
    }
    setCurrentItems(currentProducts)
  };


  useEffect(() => {
    productService
      .getProducts()
      .then((res) => {
        setProducts(
          res.data.sort((a, b) => {
            return a.price - b.price;
          })
        );
        setCurrentItems(res.data.slice(0, 4).sort((a, b) => {
            return a.price - b.price;
        }))
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setCurrentItems(
      [...currentItems].sort((a, b) => {
        if (sorted == "price") {
          return a.price - b.price;
        }
        return new Date(a.createdAt) - new Date(b.createdAt);
      })
      )
  }, [sorted]);

  
  console.log(currentItems)
  return (
    <div>
      <Breadcrumbs title="Shop" />
      <Filter sort={sorted} sortHandle={setSorted} setGridView={setGridView} />
      <div className={styles["products-wrapper"]}>
        {currentItems.map((product) => {
          return (
            <Product
              key={product._id}
              id={product._id}
              img={product.img}
              title={product.title}
              descr={product.descr}
              price={product.price}
              date={product.createdAt}
              gridView={gridView}
            />
          );
        })}
      </div>
      <ReactPaginate
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName={styles["pagination-wrapper"]}
        pageLinkClassName={styles["pagination-page"]}
        nextClassName={styles["pagination-next"]}
        activeLinkClassName={styles["pagination-active"]}
      />
      <Info />
    </div>
  );
};

export default CatalogPage;