
export const createProduct = (category, name, desc, price, countInStock) => ({
  category,
  name,
  description: desc,
  price,
  countInStock,
});

const initialState = {
  products: [
    createProduct(
      'Sativa',
      'Blue Dream',
      'A potent cross between Blueberry and Haze. Blue Dream balances full-body relaxation with gentle cerebral invigoration.',
      45.00,
      20
    ),
    createProduct(
      'Indica',
      'Granddaddy Purple',
      'A famous indica cross of Mendo Purps, Skunk, and Afghanistan. Granddaddy Purple delivers a fusion of cerebral euphoria and physical relaxation.',
      50.00,
      15
    ),
    createProduct(
      'Hybrid',
      'Girl Scout Cookies',
      'GSC is a hybrid strain that blends OG Kush and Durban Poison. Known for its euphoric effects and creative energy.',
      55.00,
      25
    ),
    createProduct(
      'Sativa',
      'Sour Diesel',
      'A fast-acting sativa strain with invigorating cerebral effects. Perfect for a burst of energy and creativity.',
      40.00,
      30
    ),
    createProduct(
      'Indica',
      'Northern Lights',
      'A pure indica strain known for its relaxing effects, Northern Lights is perfect for unwinding and easing pain.',
      48.00,
      18
    )
  ],
  filteredProducts: [
    createProduct(
      'Sativa',
      'Blue Dream',
      'A potent cross between Blueberry and Haze. Blue Dream balances full-body relaxation with gentle cerebral invigoration.',
      45.00,
      20
    ),
    createProduct(
      'Indica',
      'Granddaddy Purple',
      'A famous indica cross of Mendo Purps, Skunk, and Afghanistan. Granddaddy Purple delivers a fusion of cerebral euphoria and physical relaxation.',
      50.00,
      15
    ),
    createProduct(
      'Hybrid',
      'Girl Scout Cookies',
      'GSC is a hybrid strain that blends OG Kush and Durban Poison. Known for its euphoric effects and creative energy.',
      55.00,
      25
    ),
    createProduct(
      'Sativa',
      'Sour Diesel',
      'A fast-acting sativa strain with invigorating cerebral effects. Perfect for a burst of energy and creativity.',
      40.00,
      30
    ),
    createProduct(
      'Indica',
      'Northern Lights',
      'A pure indica strain known for its relaxing effects, Northern Lights is perfect for unwinding and easing pain.',
      48.00,
      18
    )
  ],
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      return {
        products: state.products,
        filteredProducts:
          state.products.filter(product => {
            if (product.category === action.payload) {
              return product
            } else if (action.payload === "") {
              return product
            }
          })
      };

    default:
      return state;
  }
}

export const productFilter = (category) => {
  return {
    type: 'FILTER',
    payload: category,
  }
}