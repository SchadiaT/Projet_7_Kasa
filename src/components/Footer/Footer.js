import React from "react";
import classes from "./Footer.module.css"
import footerImg from "../../assets/images/LOGO.png"

export default function Footer() {
    return(
        <footer className={classes.footer}>
        <img src = {footerImg}  alt = "footer" className={classes.footer_logo} />
        <p className={classes.footer_content}>© 2020 Kasa. All rights reserved</p>
    </footer>
    )
}