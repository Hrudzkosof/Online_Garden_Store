import { domain } from "../domain";
import { loadCategoriesAction } from "../store/categoriesReducer";

export const getCategories = () => {                         // Function to fetch categories data from the server
  return (dispatch) => {                                     // Returns a function for dispatching Redux actions
    return fetch(`${domain}/categories/all`)     // Fetch request to the API endpoint for retrieving all categories
      .then((res) => res.json())                             // Converts the response to JSON format
      .then((json) => dispatch(loadCategoriesAction(json))); // Dispatches an action to load categories into the Redux store
  };
};