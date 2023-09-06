import axios from "axios";
export const API_ENDPOINT = import.meta.env.VITE_APP_API_ENDPOINT;

const config = {
  params: {},
};

//Blogs

export const getAllProductsWithReleases = async () =>
  await axios.get(`${API_ENDPOINT}/api/products?populate=*`, config);

export const getProductById = async (id) =>
  await axios.get(`${API_ENDPOINT}/api/products/${id}?populate=*`, config);

export const getAllReleasesWithCategories = async () =>
  await axios.get(`${API_ENDPOINT}/api/releases?populate=*`, config);

export const getReleasesWithID = async (id) =>
  await axios.get(`${API_ENDPOINT}/api/releases/${id}?populate=*`, config);

export const getAllDocs = async () =>
  await axios.get(
    `${API_ENDPOINT}/api/releases?populate[0]=category&populate[1]=category.subCategory&populate[2]=category.subCategory.doc&populate[3]=category.categoryDocs`,
    config
  );

export const getAllDocsByReleaseId = async (id) =>
  await axios.get(
    `${API_ENDPOINT}/api/releases/${id}?populate[0]=category&populate[1]=category.subCategory&populate[2]=category.subCategory.doc&populate[3]=category.categoryDocs`,
    config
  );