import React from "react";
import { Link } from "react-router-dom";
import classes from "./Error.module.css"

export default function Error() {
    return(
        <section className={classes.error_page}>
            <h1 className={classes.error_page_title}>404</h1>
            <h2 className={classes.error_page_subtitle}>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className={classes.error_page_subtitle}>Retourner sur la page d'accueil</Link>
        </section>
    )
}