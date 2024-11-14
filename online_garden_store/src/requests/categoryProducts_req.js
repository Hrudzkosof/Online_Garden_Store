export const getCategoryProducts = (id) => {               // Function to fetch products for a specific category based on its ID
    return fetch(`http://localhost:3333/categories/${id}`) // Makes a fetch request to the API endpoint for a specific category using the provided ID
        .then(response => response.json());                // Converts the response to JSON format
};