import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./Pages/home/HomePage";
import AppartmentPage from "./Pages/appartment/Appartment.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./layout/footer/footer.jsx";
import About from "./Pages/about/about.jsx";
import { ErrorPageNotFound } from "./Pages/404/ErrorPageNotFound.jsx";

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />{" "}
        {/* Composant pour rendre les pages enfants basées sur le routage */}
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
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <AppartmentPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
      {
        path: "/404",
        element: <ErrorPageNotFound />, // Composant affichant la page 404
      },
    ],
  },
]);

// Création du point d'ancrage pour le rendu de l'application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu de l'application dans le DOM avec le routeur
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
    {/* Fournit le routeur à l'application */}
  </React.StrictMode>
);

reportWebVitals();
