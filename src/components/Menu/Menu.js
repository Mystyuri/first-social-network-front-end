import React from 'react';
import {Link, NavLink} from "react-router-dom";
import css from "./Menu.module.css"
import FLink from "../../formulas/FLink";


const MenuBar = ({s}) => {
    return (
        <FLink path={s.toLowerCase()} name={s}/>
    )
}

const Menu = () => {
    return (
        <div>
            <MenuBar s={"Profile"}/>
            <MenuBar s={"Dialogs"}/>
            <MenuBar s={"Users"}/>
            <MenuBar s={"News"}/>
        </div>
    );
};

export default Menu;