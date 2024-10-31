export const getCategoryProducts = (id) => {
    return fetch(`http://localhost:3333/categories/${id}`)
        .then(response => response.json());
};