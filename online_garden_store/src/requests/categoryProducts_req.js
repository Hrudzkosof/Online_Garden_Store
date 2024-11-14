import { domain } from "../domain";

export const getCategoryProducts = (id) => {
    return fetch(`${domain}/categories/${id}`)
        .then(response => response.json());
};