import React from "react";
import Home from "./Home";
import housings from "../../data/Data.json";
import classes from "./HomeContent.module.css"

export default function HomeContent() {
    return(
        <section className={classes.content_container}>
            <ul className={classes.content_list}>
            {housings.map(({ id, title, cover}) =>(
                    <Home
                    key={id}
                    id={id}
                    title={title}
                    cover={cover}
                    />
                ))}
            </ul>
        </section>
    )
}