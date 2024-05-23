import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
  products: [

  ],
};

export const addToCart = createAction("ADD");
export const removeFromCart = createAction("REMOVE");

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      // Check if the product already exists in the cart
      const existingProductIndex = state.products.findIndex(
        (item) => item._id === action.payload._id,
      );

      // If it exists, increase its quantity
      if (existingProductIndex >= 0) {
        const updatedProducts = state.products.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        return { products: updatedProducts };
      }

      // If it doesn't exist, add it with a quantity of 1
      return {
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };
    })
    .addCase(removeFromCart, (state, action) => {
      // Find the product in the cart
      const productIndex = state.products.findIndex(
        (item) => item._id === action.payload._id,
      );

      // If the product is found and its quantity is greater than 1, decrease the quantity
      if (productIndex >= 0) {
        const updatedProducts = state.products.map((item, index) =>
          index === productIndex
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );

        // If the quantity becomes 0, remove the product from the cart
        if (updatedProducts[productIndex].quantity === 0) {
          return {
            products: updatedProducts.filter(
              (item) => item._id !== action.payload._id,
            ),
          };
        }

        return { products: updatedProducts };
      }

      return state;
    })
})

// export const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD":
//       // Check if the product already exists in the cart
//       const existingProductIndex = state.products.findIndex(
//         (item) => item._id === action.payload._id,
//       );

//       // If it exists, increase its quantity
//       if (existingProductIndex >= 0) {
//         const updatedProducts = state.products.map((item, index) =>
//           index === existingProductIndex
//             ? { ...item, quantity: item.quantity + 1 }
//             : item,
//         );
//         return { products: updatedProducts };
//       }

//       // If it doesn't exist, add it with a quantity of 1
//       return {
//         products: [...state.products, { ...action.payload, quantity: 1 }],
//       };

//     case "REMOVE":
//       // Find the product in the cart
//       const productIndex = state.products.findIndex(
//         (item) => item._id === action.payload._id,
//       );

//       // If the product is found and its quantity is greater than 1, decrease the quantity
//       if (productIndex >= 0) {
//         const updatedProducts = state.products.map((item, index) =>
//           index === productIndex
//             ? { ...item, quantity: item.quantity - 1 }
//             : item,
//         );

//         // If the quantity becomes 0, remove the product from the cart
//         if (updatedProducts[productIndex].quantity === 0) {
//           return {
//             products: updatedProducts.filter(
//               (item) => item._id !== action.payload._id,
//             ),
//           };
//         }

//         return { products: updatedProducts };
//       }

//       return state;

//     default:
//       return state;
//   }
// };

// export const addToCart = (product) => {
//   return {
//     type: "ADD",
//     payload: product,
//   };
// };

// export const removeFromCart = (product) => {
//   return {
//     type: "REMOVE",
//     payload: product,
//   };
// };
