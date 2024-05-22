
import axios from 'axios';

const createCategory = (name, display, desc) => ({
  name,
  display,
  description: desc,
});

const initialState = {
  categories: [
    createCategory("Indica", "Indica", "In da couch"),
    createCategory("Sativa", "Sativa", "Not in da couch"),
    createCategory("Hybrid", "Hybrid", "Maybe in da couch"),
  ],
  activeCategory: "",
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        categories: state.categories,
        activeCategory: action.payload,
      };
    case 'SET_CATEGORIES':
      return {
        categories: action.payload,
        activeCategory: state.activeCategory
      }
    default:
      return state;
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    const results = response.data.results;
    dispatch(setCategories(results))
  } catch (e) {
    console.log(e)
  }
}

export const setCategories = (array) => {
  return {
    type: 'SET_CATEGORIES',
    payload: array
  }
} 