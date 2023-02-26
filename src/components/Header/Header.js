import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/LOGO.png";
import classes from "./Header.module.css"


export default function Header() {
    return(
        <header className={classes.header}>
        <div>
            <img src={logo} alt="kasa-logo" className={classes.header_logo} />
        </div>
        <nav className={classes.header_nav}>
                <Link to="/" className={classes.header_nav_link_home}>Accueil</Link>
                <Link to="/about" className={classes.header_nav_link_about}>A propos</Link>
        </nav>
        </header>
    )
}