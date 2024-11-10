import { loadCategoriesAction } from "../store/categoriesReducer";

export const getCategories = () => {
  return (dispatch) => {
    return fetch('http://localhost:3333/categories/all')
      .then((res) => res.json())
      .then((json) => dispatch(loadCategoriesAction(json)));
  };
};