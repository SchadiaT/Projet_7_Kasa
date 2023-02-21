import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
    return(
        <section className="error_page">
            <h1 className="error_page_title">404</h1>
            <h2 className="error_page_subtitle">Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </section>
    )
}