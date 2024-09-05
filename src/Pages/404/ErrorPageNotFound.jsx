import React from "react";
import "./ErrorPageNotFound.scss";
import Navbar from "../../components/navbar/Navbar";
import Main from "../../layout/main/main";
import { Link } from "react-router-dom";
import Footer from "../../layout/footer/footer";

export function ErrorPageNotFound() {
  return (
    <>
      <Main>
        <div className="page__error">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </Main>
    </>
  );
}
