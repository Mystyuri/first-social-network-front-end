import React from 'react';
import css from "./Auth.module.css"
import FLink from "../../formulas/FLink";
import {useNavigate} from "react-router-dom";

const Auth = ({name, id, isOn, logoutAuth}) => {
    let navigate = useNavigate()
    return (
        <div className={css.auth}>
            <div>Welcome, <b>{name}</b></div>
            {!isOn ? <div><button onClick={() => navigate("login")}>Login</button></div> : <div>id:{id} <button onClick={logoutAuth}>Logout</button></div>}
            {/*<FLink name={"login"} path={"login"}/>*/}
        </div>
    );
};

export default Auth;