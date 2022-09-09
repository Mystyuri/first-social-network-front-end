import React from 'react';
import {NavLink} from "react-router-dom";
import css from "../App.css"

const FLink = ({active, passive, path, name}) => {

        const activeCss = active || "activeLink" // active = активная ссылка
        const passiveCss = passive || "passiveLink" // passive = не активная ссылка
        const setPath = path.toString() || "./"
        const setActive = ({isActive}) => isActive ? activeCss : passiveCss

        return (
            <div>
                <NavLink to={setPath} className={setActive} style={{textOverflow: "ellipsis"}}>{name}</NavLink>
            </div>
        )
    }

export default FLink;