import React, {useState} from 'react';
import css from "./FTextCloud.module.css"
import FLikesCount from "./FLikesCount";

const FTextCloud = ({state}) => {


    const dataText = state.map(d => {
        return <div className={css.background} key={d.id}>
            {d.text}
            {(d.likes >= 0) ? <div className={css.likes}>{"❤: " + d.likes}</div> : ""}
        </div>
    })

    return (
        <div className={css.fTextCloud}>
            {dataText}
        </div>
    );
};

export default FTextCloud;