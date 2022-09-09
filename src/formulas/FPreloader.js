import React from 'react';
import css from "./FPreloader.module.css"

const FPreloader = (props) => {
    return <div className={css.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
};

export default FPreloader;