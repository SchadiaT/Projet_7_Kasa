import React from "react";
import classes from "./Banner.module.css"
import BannerImg from "../../assets/images/Banner.png"

export default function Banner() {
    return(
        <div className={classes.banner}>
            <img className={classes.banner_img} src={BannerImg} alt="Banner"/>
            <div className={classes.banner_dark} ></div>
            <span className={classes.banner_txt} >
                <p>Chez vous partout et ailleurs</p>
            </span>
        </div> 
    )
}