import { domain } from "../domain";
import { loadCategoriesAction } from "../store/categoriesReducer";

export const getCategories = () => {
  return (dispatch) => {
    return fetch(`${domain}/categories/all`)
      .then((res) => res.json())
      .then((json) => dispatch(loadCategoriesAction(json)));
  };
};