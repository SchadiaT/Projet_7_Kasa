import React from "react";
import housings from "../../data/Data.json"
import { useParams } from "react-router-dom";
import Gallery from "../../assets/Gallery/Gallery";
import Collapse from "../../assets/Collapse/Collapse";
import classes from "./Location.module.css";
import RatingStar from "./RatingStar";

export default function Location() {
    const {id} = useParams()
    const housing = housings.find(housing => housing.id === id)

    return(
        <section key={housing.id} className= {classes.location_container}>
           <Gallery  
            img={housing.pictures} 
            />
        <header className={classes.location_header}>
            <article className={classes.location_infos}>
                <h1 className={classes.location_title}>{housing.title}</h1>
                <h2 className={classes.location_gps}>{housing.location}</h2>
                <div className={classes.location_tags}>
                    {housing.tags.map((tag, i) => (
                        <p key={i} className={classes.location_tag}>{tag}</p>
                    ))}
                </div>
            </article>
        
            <article className={classes.location_host}>
                <div className={classes.location_host_info}>
                    <p className={classes.location_host_name}>{housing.host.name}</p>
                    <img src={housing.host.picture} alt='host-cover'className={classes.location_host_img} />
                </div>
                <RatingStar
                    scaleValue={housing.rating}
                />
            </article>
        </header>

        <article className={classes.location_collapse}>
            <div className={classes.location_collapse_content}>
                <Collapse
                    title='Description'
                    content={housing.description}
                />
            </div>
            <div className={classes.location_collapse_content}>
                <Collapse
                    title='Équipements'
                    content={housing.equipments.map((equipment, i) => (
                        <ul key={i}>
                            <li>• {equipment}</li>
                        </ul>
                    ))}
                />
            </div>
        </article>
    </section>
    )

}