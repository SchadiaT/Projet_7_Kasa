import React from "react";
import classes from "./Banner.module.css";

export default function Banner(props) {
    return(
        <div className={classes.banner}>
            <h1 className={classes.banner_title}>{props.title}</h1>
            <img src={props.src} alt='banniere-kasa' className={classes.banner_Img} />
        </div> 
    )
}