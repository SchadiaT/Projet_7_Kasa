import React from "react";

export default function Home({id, title, cover}) {
    return(
        <div>
            <li key={id}>
            <a href={'/housing/' + id}>
                <figure >
                    <img src={cover} alt={title}  />
                    <figcaption >
                        <h2 >{title}</h2>
                    </figcaption>
                </figure>
            </a>
        </li> 
        </div>
    )
}