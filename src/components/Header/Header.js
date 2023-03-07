import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/LOGO.png";
import classes from "./Header.module.css"


export default function Header() {
    return(
        <header className={classes.header}>
        <NavLink to="/">
            <img src={logo} alt="kasa-logo" className={classes.header_logo} />
        </NavLink>
        <nav className={classes.header_nav}>
                <NavLink to="/" className= {({ isActive }) => (isActive ? `${classes.header_nav_link_home} ${classes.active_nav_link}` : `${classes.header_nav_link_home}`)}
                >Accueil</NavLink>
                <NavLink to="/about" className= {({ isActive }) => (isActive ? `${classes.header_nav_link_about} ${classes.active_nav_link}` : `${classes.header_nav_link_home}`)}
                >A propos</NavLink>
        </nav>
        </header>
    )
}