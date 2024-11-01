import { loadCategoriesAction } from "../store/categoriesReducer";

export const getCategories = () => {
  return (dispatch) => {
    return fetch('http://localhost:3333/categories/all')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((json) => dispatch(loadCategoriesAction(json)))
      .catch((error) => console.error('Error fetching categories:', error));
  };
};