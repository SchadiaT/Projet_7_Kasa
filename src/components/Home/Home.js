import React from "react";
import classes from "./Home.module.css";

export default function Home({id, title, cover}) {
    return(
        
            <li key={id} className={classes.home_card}>
            <a href={'/housing/' + id}>
                <figure className={classes.home_figure}>
                    <img src={cover} alt={title} className={classes.home_img} />
                    <figcaption className={classes.home_figcaption}>
                        <h2 >{title}</h2>
                    </figcaption>
                </figure>
            </a>
        </li> 
    )
}