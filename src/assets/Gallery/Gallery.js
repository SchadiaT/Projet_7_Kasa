import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import classes from "./Gallery.module.css"

const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />
const angleRight = <FontAwesomeIcon icon={faAngleRight} />

export default function Gallery(props) {
    const [slideIdx, setSlideIdx] = useState(0);
    const imgSize = () => {
        const slideshowImg = document.querySelector('.slideshow_container img');
        if(!slideshowImg){
            return 0;
        }
        return slideshowImg.width;
    }

    const onNext = () => {
        if(slideIdx === props.img.length - 1){
            setSlideIdx(0)
        } else {
            setSlideIdx(slideIdx + 1)
        }
    }

    const onPrev = () => {
        if(slideIdx === 0){
            setSlideIdx(props.img.length - 1)
        } else {
            setSlideIdx(slideIdx - 1)
        }
    }


    return(
        <div className={classes.slideshow}>
            <div className={classes.slideshow_container} style={{transform: `translateX(-${slideIdx * imgSize()}px)`}}>
                {props.img.map((picture, i) => 
                    <img className={classes.slideshow_img} alt='banniere-page-logement' src={picture} key={i} />
                )}
            </div>
            
            {props.img.length > 1 && <>
            <div className={classes.slideshow_controls}>
                <i className={classes.slideshow_controls_chevron} onClick={onPrev}>{angleLeft}</i>
                <i className={classes.slideshow_controls_chevron} onClick={onNext}>{angleRight}</i>
            </div>
            <div className={classes.slideshow_idx}>{slideIdx + 1} / {props.img.length}</div>
            </>}
        </div>
    )
}