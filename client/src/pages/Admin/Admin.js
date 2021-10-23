import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { useCatalogContext } from '../../context/catalog';
import styles from './admin.module.css';

const Admin = () => {
  const { catalog, addType } = useCatalogContext();
  const [data, setData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    addType(data);
  };

  const handleChange = (event) => {
    const { target } = event;

    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  console.log('types: ', catalog.types);

  return (
    <div className={styles.admin}>
      <Header />
      <div className="container">
        <div className={styles.forms}>
          <form onSubmit={handleSubmit} className={styles.addType}>
            <div className={styles.inputWrap}>
              <label htmlFor="labelForCategory" className={styles.label}>Название для фильтра:</label>
              <input onChange={handleChange} id="labelForCategory" name="labelForCategory" type="text" className={styles.input} />
            </div>
            <div className={styles.inputWrap}>
              <label htmlFor="labelForProduct" className={styles.label}>Название для карточки товара:</label>
              <input onChange={handleChange} id="labelForProduct" name="labelForProduct" type="text" className={styles.input} />
            </div>
            <div className={styles.inputWrap}>
              <label htmlFor="labelForAddress" className={styles.label}>Название для адреса:</label>
              <input onChange={handleChange} id="labelForAddress" name="labelForAddress" type="text" className={styles.input} />
            </div>
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
