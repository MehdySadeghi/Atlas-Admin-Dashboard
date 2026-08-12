# Atlas Admin Dashboard

Atlas is a responsive admin dashboard built with React. The project provides a structured interface for managing products and navigating between different sections of an admin application.

The project was built as a practical React project to improve my experience with reusable components, routing, responsive layouts, CSS Modules, and organizing a larger React application.

## Features

- Responsive admin dashboard layout
- Dashboard overview
- Product listing
- Product details
- Reusable product cards
- Analytics section
- Statistics section
- Users section
- Settings page
- Application navigation
- Dashboard navigation
- Product navigation
- Responsive product images
- Reusable loading and spinner components
- Client-side routing
- Component-level styling with CSS Modules

## Built With

- React
- React Router
- JavaScript
- Vite
- CSS Modules
- ESLint

## Project Structure

```text
src/
├── assets/
│   └── images/
├── components/
│   ├── Analytics.jsx
│   ├── AppNav.jsx
│   ├── Dashboard.jsx
│   ├── DashboardNav.jsx
│   ├── Header.jsx
│   ├── Overview.jsx
│   ├── ProductCard.jsx
│   ├── ProductDetails.jsx
│   ├── ProductList.jsx
│   ├── Products.jsx
│   ├── ProductsNav.jsx
│   ├── Settings.jsx
│   ├── Spinner.jsx
│   ├── SpinnerFullPage.jsx
│   ├── Statistics.jsx
│   └── Users.jsx
├── data/
│   └── products.js
├── pages/
│   ├── AppLayout.jsx
│   └── Homepage.jsx
├── styles/
│   └── globals.css
├── App.jsx
└── main.jsx
Getting Started
Prerequisites

Make sure you have Node.js and npm installed.

Installation

Clone the repository:

git clone https://github.com/MehdySadeghi/Atlas-Admin-Dashboard.git

Navigate to the project directory:

cd Atlas-Admin-Dashboard

Install the dependencies:

npm install
Run the Development Server
npm run dev

Vite will provide the local development URL in the terminal.

Build for Production
npm run build
Preview the Production Build
npm run preview
Project Approach

The application is separated into reusable components rather than keeping the dashboard in one large component.

The main layout is separated from individual dashboard sections, while components such as product cards, navigation elements, headers, and loading states are kept reusable.

Product data is stored separately from the UI components. This keeps the data and presentation logic separated and makes the product-related components easier to maintain.

CSS Modules are used for component-specific styling so that styles remain scoped to the components they belong to.

React Router is used to handle navigation between the different views of the application.

What I Practiced

While building Atlas, I focused on:

Structuring a larger React application
Breaking a UI into reusable components
Working with React Router
Creating responsive layouts
Using CSS Modules
Separating data from presentation
Building reusable loading states
Organizing product-related components
Keeping the project structure clean as the application grows
Status

This project is currently a completed learning and portfolio project.

It can be extended with additional features and functionality as the project evolves.

Author

Mehdy Sadeghi

GitHub: https://github.com/MehdySadeghi
