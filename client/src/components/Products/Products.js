import React from 'react';
import styles from './products.module.css';

const Products = (props) => {
  const { products, brands, types } = props;

  const getBrandById = (id) => {
    const brand = brands.find((item) => item.id === id);

    return brand.name;
  };

  const getTypeById = (id) => {
    const brand = types.find((item) => item.id === id);

    return brand.name;
  };

  return (
    <div className={styles.list}>
      {products.rows.map((item) => (
        <a key={item.id} href="/" className={styles.listItem}>
          {`${getTypeById(item.typeId)} ${getBrandById(item.brandId)} ${item.name}`}
        </a>
      ))}
    </div>
  );
};

export default Products;
