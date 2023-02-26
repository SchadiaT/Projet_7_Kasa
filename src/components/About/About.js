import React from "react";
import Collapse from "../../assets/Collapse/Collapse";
import classes from "./About.module.css"

export default function About() {
    return(
        <section className={classes.about_collapse}>
        <div className={classes.about_content}>
           <Collapse
                title='Fiabilité'
                content='Les annonces postées sur Kasa garantissent une fiabilité totale. 
                Les photos sont conformes aux logements, et toutes les informations 
                sont régulièrement vérifiées par nos équipes.'
           />
        </div>
        <div className={classes.about_content}>
            <Collapse
                title='Respect'
                content='La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage
                entraînera une exclusion de note plateforme.'
           />
        </div>
        <div className={classes.about_content}>
            <Collapse
                title='Service'
                content="Nos équipes se tiennent à votre disposition pour vous fournir une 
                expérience parfaite. N'hésitez pas à nous contacter si vous avez 
                la moindre question."
            />
        </div>
        <div className={classes.about_content}>
           <Collapse
                title='Sécurité'
                content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que 
                pour les voyageurs, chaque logement correspond aux critères de sécurité
                établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                locataire, cela permet à nos équipes de vérifier que les standards sont 
                bien respectés. Nous organisons également des ateliers sur la sécurité 
                domestique pour nos hôtes."
          />
        </div>
    </section>
    )
}