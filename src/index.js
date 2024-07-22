import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import HomePage from './Pages/HomePage'; 
import AppartmentPage from './Pages/AppartmentPage'; 
import Navbar from './components/navbar/Navbar.jsx';
import Footer from "./layout/footer/footer.jsx"; 
import About from "./Pages/Pages/apropos.jsx"
import { ErrorPageNotFound } from './Pages/Pages/ErrorPageNotFound.jsx';

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPageNotFound />,
    children: [
      {
        path: '/',
        element: <HomePage /> 
      },
      {
        path: '/flat',
        element: <AppartmentPage />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <h1>Contact</h1>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
