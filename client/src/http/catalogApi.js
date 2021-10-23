import { $host } from '.';

export const getProducts = async () => {
  const response = await $host.get('api/device');
  return response.data;
};

export const getBrands = async () => {
  const response = await $host.get('api/brand');
  return response.data;
};

export const getProductsById = async (id) => {
  const response = await $host.get(`api/device/${id}`);
  console.log({ response });
};

export const getTypes = async () => {
  const response = await $host.get('api/type');
  return response.data;
};

export const addType = async () => {
  const response = await $host.get('api/type');
  return response.data;
};
