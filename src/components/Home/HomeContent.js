import React from "react";
import Home from "./Home";
import housings from "../../data/Data.json"

export default function HomeContent() {
    return(
        <section>
            <ul>
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