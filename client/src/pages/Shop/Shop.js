import React from 'react';
import Header from '../../components/Header/Header';
import Products from '../../components/Products/Products';
import { useCatalogContext } from '../../context/catalog';
import styles from './shop.module.css';

const Shop = () => {
  const { catalog } = useCatalogContext();

  return (
    <div className={styles.shop}>
      <Header />
      <div className={styles.catalog}>
        <div className="container">
          {catalog?.products && catalog?.brands && catalog?.types && (
            <Products products={catalog.products} types={catalog.types} brands={catalog.brands} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
