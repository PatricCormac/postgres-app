import React, {
  createContext, useContext, useEffect, useState
} from 'react';
import { getBrands, getProducts, getTypes } from '../http/catalogApi';

const CatalogContext = createContext();

export const CatalogProvider = ({ children }) => {
  const [catalog, setCatalog] = useState();

  useEffect(() => {
    getProducts().then((res) => {
      setCatalog((prev) => ({
        ...prev,
        products: res
      }));
    });

    getBrands().then((res) => {
      setCatalog((prev) => ({
        ...prev,
        brands: res
      }));
    });

    getTypes().then((res) => {
      setCatalog((prev) => ({
        ...prev,
        types: res
      }));
    });
  }, []);

  const addType = (data) => {
    setCatalog((prev) => {
      prev.types.push(data);

      return {
        ...prev
      };
    });
  };

  const state = {
    catalog,
    addType
  };

  return (
    <CatalogContext.Provider value={state}>
      { children }
    </CatalogContext.Provider>
  );
};

export const useCatalogContext = () => {
  const value = useContext(CatalogContext);

  return value;
};
