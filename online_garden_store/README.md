# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### routing 
we use react-routing


# Garden Products

## Project Description
This project is a web application for an online store specializing in home and garden products. The site provides users with a convenient interface for browsing products, categorizing them, adding items to a cart, and placing orders.

## Technologies Used
- **React**  
  Used for building the user interface and creating dynamic, interactive components.

- **Redux**  
  Used for managing the global state of the application, ensuring data consistency across components.

- **React-Redux**  
  Provides bindings between React and Redux, allowing components to easily access and interact with the Redux store.

- **React Router DOM**  
  Used for implementing client-side routing, enabling navigation between different pages without reloading the application.

- **Redux Thunk**  
  Middleware for handling asynchronous actions in Redux, such as fetching data from an API.

- **React Icons**  
  Used for adding customizable icons to the application, enhancing the user interface design and improving visual appeal.

- **NPM**  
  Node Package Manager used for installing and managing dependencies like Redux, React-Redux, React Router DOM, Redux Thunk, and React Icons.

- **Google Maps API**  
  Used to embed an interactive map into the application.

- **Figma**  
  Used for designing the application's UI and ensuring mobile responsiveness.

- **Git & GitHub**  
  Used for version control, collaboration, and repository management.

- **VS Code**  
  Used as the primary code editor for development.

---

## Authors and Contributions

- **Sofiia Hrudzko**  
  Contributed the following features and functionalities:
  1. Displayed 4 random discounted products on the main page.
  2. Created the **Header** with a logo.
  3. Enabled navigation to the "Discounted Products" section for a selected category by clicking a button.
  4. Implemented the display of a complete product list.
  5. Developed the functionality to display a list of selected products in the cart, including their quantities and total cost.
  6. Added the ability to:
     - Change the quantity of products in the cart.
     - Remove products from the cart.
  7. Created a **404 Page** to display a "Page Not Found" message when users navigate to a non-existent page.
  8. Added the functionality to return to the home page from the **404 Page**.
  9. Ensured mobile responsiveness for screen size **768px**, following the provided design prototype.
  10. Documented the code with clear and concise comments to improve readability and maintainability.

- **Abdulloeva Lazizahon**  
  Contributed the following features and functionalities:
  1. Created the **Footer** with:
     - Display of contacts, address, working hours, and social media links.
     - Embedded map using **Google Maps**.
  2. Added an image with a button that navigates to the full list of discounted products.
  3. Implemented the display of the discounted products list.
  4. Documented the code with comments to enhance readability and maintainability.
  5. Developed and refined the application's styles.

- **Viktoriia Vasylenko**  
  Contributed the following features and functionalities:
  1. Displayed a list of 4 product categories on the main page.
  2. Implemented the ability to view a complete list of all available product categories.
  3. Enabled navigation to the "Products by Categories" section for a selected category by clicking on the category card.
  4. Implemented the display of products in the selected category.
  5. Added the ability to add products to the cart with a floating button that appears when hovering over a product.
  6. Created an order form for placing a product order.
  7. Implemented the functionality to send order data upon form submission.
  8. Ensured mobile responsiveness for screen size **1000px**, following the provided design prototype.
  9. Documented the code with clear comments to improve readability and maintainability.

- **Yekaterina Kiel**  
  Contributed the following features and functionalities:
  1. Developed a discount form offering 5% off with client-side validation using the **React Hook Form** library.
  2. Implemented product sorting:
     - Default sorting
     - Price descending
     - Price ascending
     - Alphabetical order
  3. Added product filtering functionality:
     - By discount availability
     - By price range
  4. Enabled navigation to detailed product descriptions by clicking on product cards.
  5. Implemented the ability to add products to the cart from the product details page.
  6. Calculated and displayed the total price of items in the shopping cart.
  7. Ensured mobile responsiveness for screen sizes **480px** and **360px**, following the provided design prototype.

---

## Expected Outcomes

1. A fully implemented web application that meets the described requirements.
2. Project code uploaded to the repository on GitHub.
3. A detailed project report that includes:
   - Description of implemented functionalities.
   - Challenges encountered and their resolutions.
   - Future plans for the application.

---

## Design
The design follows a Figma prototype with mobile adaptation. You can access the design at the link below:

[Figma Prototype](https://www.figma.com/design/SDNWLzCWkh9ZXdCpWEaByv/project-frontend?node-id=316-6113&node-type=frame&t=PQkxiUCv1ijEUWYP-0)

---

## API
The application uses an API as a data source. The backend repository can be accessed via the following link. It needs to be downloaded and run locally (on `localhost:3333`):

[GitHub - Backend Repository](https://github.com/HaykInanc/telran_project_backend)




