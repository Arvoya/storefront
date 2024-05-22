const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        products: [...state.products, action.payload],
      };
    case "REMOVE":
      return {
        products: state.products.filter((product) => product != action.payload),
      }
    default:
      return state;
  }
};

export const addToCart = (product) => {
  return {
    type: "ADD",
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: "REMOVE",
    payload: product,
  };
};

