import React from 'react';
import logoImg from "../../../../content/avatar.jpg";
import css from "./User.module.css"
import FLink from "../../../../formulas/FLink";
import FButton from "../../../../formulas/FButton";

const User = ({photo, name, id, followed, setFollowed}) => {
    return <div className={css.user}>
            <div>
                <img src={photo === null ? logoImg : photo} className={"avatar-logo-small"}/>
            </div>
            <span>
            <div style={{fontWeight: "bold", marginBottom: "5px", width: "100px", textOverflow: "ellipsis",overflow: "hidden"}}><FLink path={`/Profile/${id}`} name={name} passive={css.passiveLink}/></div>
            <div><FButton trueName={"Unfollow"} falseName={"Follow"} logic={followed} setNewLogic={() => setFollowed(id, followed)}/></div>
            </span>
    </div>
};

export default User;