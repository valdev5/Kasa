import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/footer"; // Assurez-vous du bon chemin et de la casse

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <h1>404 Erreur</h1>,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/flat",
        element: <h1>Nos appartements</h1>
      },
      {
        path: "/about",
        element: <h1>A propos</h1>
      },
      {
        path:"/contact",
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

// Si vous souhaitez mesurer les performances de votre application, passez une fonction
// pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou envoyez-les à une destination d'analyse. En savoir plus : https://bit.ly/CRA-vitals
reportWebVitals();
