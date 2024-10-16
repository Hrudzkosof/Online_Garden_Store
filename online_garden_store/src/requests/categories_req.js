export const getAllCategories = (setState) => {
  fetch('http://localhost:3333/categories/all')
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to fetch categories');
      }
      return res.json();
    })
    .then(json => {
      console.log('Data received:', json); 
      setState(json);
    })
    .catch(error => {
      console.error('Error fetching categories:', error); 
    });
};

export const getCategoryDetails = (id, setState) => {
  fetch(`http://localhost:3333/categories/${id}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to fetch category details');
      }
      return res.json();
    })
    .then(json => {
      console.log('Data received:', json); 
      setState(json);
    })
    .catch(error => {
      console.error('Error fetching category details:', error); 
    });
};

export const getProductsByCategoryId = (id, setState) => {
  fetch(`http://localhost:3333/categories/${id}/products`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      return res.json();
    })
    .then(json => {
      console.log('Data received:', json); 
      setState(json);
    })
    .catch(error => {
      console.error('Error fetching products:', error); 
    });
};