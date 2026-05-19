# React Custom Hook Project

## Project Overview

This project demonstrates the use of a custom React hook called useFetch. The hook is used to fetch product data from an external API and display it in a simple product list UI.

The project was created to understand how custom hooks work and how API fetching can be reused across components.

---

## Features

- Custom hook (useFetch)
- API data fetching
- Loading state handling
- Error handling
- Product list display

---

## API Used

https://api.escuelajs.co/api/v1/products

---

## Technologies Used

- React.js
- JavaScript
- CSS

---

## How to Run the Project

1. Install dependencies

npm install

2. Start development server

npm run dev

---

## Project Structure

src/
 ├── hooks/
 │    └── useFetch.jsx
 │
 ├── components/
 │    ├── ProductList.jsx
 │    └── ProductList.css
 │
 └── App.jsx

---

## About useFetch Hook

The useFetch hook is used to simplify API fetching. It manages:
- fetched data
- loading state
- error state

The hook uses:
- useState for state management
- useEffect for running fetch on component load
- useCallback to avoid unnecessary function recreation

---

## Author

Vansh Kashyap
