import axios from "axios";

export const createProduct = (
  category,
  name,
  desc,
  image,
  price,
  countInStock,
) => ({
  category,
  name,
  description: desc,
  image,
  price,
  countInStock,
});

const initialState = {
  products: [],
  filteredProducts: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        products: state.products,
        filteredProducts: state.products.filter((product) => {
          if (product.category === action.payload) {
            return product;
          } else if (action.payload === "") {
            return product;
          }
        }),
      };
    case "SET_PRODUCTS":
      return {
        products: action.payload,
        filteredProducts: action.payload,
      };
    default:
      return state;
  }
};

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/products");
    const results = response.data;
    dispatch(setProducts(results));
  } catch (e) {
    console.log(e);
  }
};

export const setProducts = (array) => {
  return {
    type: "SET_PRODUCTS",
    payload: array,
  };
};
