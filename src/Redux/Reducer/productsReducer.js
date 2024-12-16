import {
  CREATE_PRODUCT,
  DELETE_DATA,
  DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_BY_BRAND,
  GET_ALL_PRODUCTS_BY_CATEGORY,
  GET_ERROR,
  GET_ONE_PRODUCT,
  GET_PRODUCT_LIKE,
  UPDATE_PRODUCT,
} from "../type";

const inital = {
  products: [],
  allProducts: [],
  oneProduct: [],
  deleteProduct: [],
  updateProduct: [],
  productsLike: [],
  productsByCategory: [],
  productsByBrand: [],
  loading: true,
};
const productReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, allProducts: action.payload, loading: false };
    case CREATE_PRODUCT:
      return {
        products: action.payload,
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProduct: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProduct: action.payload,
        loading: false,
      };
    case GET_ONE_PRODUCT:
      return {
        oneProduct: action.payload,
        loading: false,
      };
    case GET_PRODUCT_LIKE:
      return {
        ...state,
        productsLike: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        productsByCategory: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS_BY_BRAND:
      return {
        ...state,
        productsByBrand: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return { ...state, products: action.payload, loading: true };

    default:
      return state;
  }
};

export default productReducer;
