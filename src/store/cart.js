const initialState = {
  products: [],
  cartCount: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        products: [...state.products, action.payload],
        cartCount: state.cartCount + 1,
      };
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
