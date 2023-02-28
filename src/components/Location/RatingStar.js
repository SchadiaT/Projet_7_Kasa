import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import classes from "./RatingStar.module.css";

const star = <FontAwesomeIcon icon={faStar} />
const starGrey = <FontAwesomeIcon icon={faStar} />

export default function RatingStar(props) {
    const scaleValue = props.scaleValue

    const range = [1, 2, 3, 4, 5]
    return(
        <div className={classes.rating_star}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? 
                    <span key={rangeElem.toString()} className={classes.rating_star_full}>{star}</span> 
                    : <span key={rangeElem.toString()} className={classes.rating_star_grey}>{starGrey}</span>
            )}
        </div>
    )
}