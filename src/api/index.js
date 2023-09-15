import axios from "axios";
export const API_ENDPOINT = import.meta.env.VITE_APP_API_ENDPOINT;

const config = {
  params: {},
};

//Blogs

export const getProductWithReleasesById = async (id) =>
  await axios.get(
    `${API_ENDPOINT}/api/products/${id}?populate[0]=releases&populate[1]=releases.category&populate[2]=releases.category.subCategory`,
    config
  );

export const getAllProductsWithReleases = async () =>
  await axios.get(
    `${API_ENDPOINT}/api/products?populate[0]=releases&populate[1]=releases.category&populate[2]=releases.category.subCategory`,
    config
  );

export const getProductById = async (id) =>
  await axios.get(`${API_ENDPOINT}/api/products/${id}?populate=*`, config);

export const getAllReleasesWithCategories = async () =>
  await axios.get(`${API_ENDPOINT}/api/releases?populate=*`, config);

//Api which return subcategories and documents:
export const getAllData = async () =>
  await axios.get(
    `${API_ENDPOINT}/api/products?populate[0]=releases&populate[1]=releases.category&populate[2]=releases.category.subCategory&populate[3]=releases.category.categoryDocs&populate[4]=releases.category.subCategory.doc`,
    config
  );

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
