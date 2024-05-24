import axios from "axios";

const createCategory = (name, display, desc) => ({
  name,
  display,
  description: desc,
});

const initialState = {
  categories: [],
  activeCategory: "",
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        categories: state.categories,
        activeCategory: action.payload,
      };
    case "SET_CATEGORIES":
      return {
        categories: action.payload,
        activeCategory: state.activeCategory,
      };
    default:
      return state;
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/categories");
    const results = response.data;
    dispatch(setCategories(results));
  } catch (e) {
    console.log(e);
  }
};

export const setCategories = (array) => {
  return {
    type: "SET_CATEGORIES",
    payload: array,
  };
};
