import React from "react";
import { useState } from "react";
import classes from "./Collapse.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const angleDown = <FontAwesomeIcon icon={faAngleDown} />
const angleUp = <FontAwesomeIcon icon={faAngleUp} />

export default function Collapse(props) {
    const [ openTab, setOpenTab ] = useState(false);

    const openTabHandler = () => {
        setOpenTab((openTab) => !openTab); 
    };
    return(
        <>
            <div onClick={openTabHandler} className={classes.collapse_header}>
                <h2 className={classes.collapse_title}>{props.title}</h2>
                {!openTab ? <i className={classes.collapse_icon}>{angleDown}</i> : <i className={classes.collapse_icon}>{angleUp}</i>}
            </div>
            {openTab && 
                <div className={classes.collapse_content}>{props.content}</div>
            }
        </>
    )
}