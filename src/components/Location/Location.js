import React from "react";
import housings from "../../data/Data.json"
import { useParams } from "react-router-dom";

export default function Location() {
    const {id} = useParams()
    const housing = housings.find(housing => housing.id === id)

    return(
        <section key={housing.id} >
       
            img={housing.pictures} 
      

        <header >
            <article>
                <h1 >{housing.title}</h1>
                <h2 >{housing.location}</h2>
                <div >
                    {housing.tags.map((tag, i) => (
                        <p key={i} >{tag}</p>
                    ))}
                </div>
            </article>
        
            <article >
                <div >
                    <p >{housing.host.name}</p>
                    <img src={housing.host.picture} alt='host-cover' />
                </div>
              
                    scaleValue={housing.rating}
              
            </article>
        </header>

        <article >
            <div >
                
                    title='Description'
                    content={housing.description}
                
            </div>
            <div >
                
                    title='Équipements'
                    content={housing.equipments.map((equipment, i) => (
                        <ul key={i}>
                            <li>• {equipment}</li>
                        </ul>
                    ))}
                
            </div>
        </article>
    </section>
    )

}