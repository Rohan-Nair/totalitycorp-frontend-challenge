This repository contains my submission for the totality corp frontend challenge.

- Auth and Backend
  I have created a Firestore database using Firebase which handles the storage of the products on the site, the users and their carts and is fetched by the Frontend implementation.
  I have also implemented authentication (Signup and Login) using Firebase Auth.

- Frontend
  I have built the Frontend using React. Routes of the page are handled by using the React Router v6.The routes consist of the login and signup pages, the product listing page, the product info page which is dynamic for every product and the cart page which is a Protected Route accessible only by the logged in Users. The product listing page contains filters and a search functionality. The UI is fully responsive for all screens. Sharing of data in the app within the components is enabled by the Context API.

Tech Stack

```
- React + Vite
- Tailwind CSS
- Geist UI
- Firebase(Auth and Firestore)
```
