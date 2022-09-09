import React, {useMemo, useState} from 'react';
import css from "./FButton.module.css"

const FButton = ({trueName, falseName, logic, setNewLogic}) => {
    let z = "analysis"
    let [isAnalysis, changeIsAnalysis] = useState(0)
    let [state, changeState] = useState(logic)
    let callBackProcess = () => {
        changeIsAnalysis(z)
        setNewLogic();
    }

    useMemo(() => {
        changeIsAnalysis(0)
        changeState(logic)
    }, [logic])


    let a = (state) ?
        <button disabled={isAnalysis === z} className={css.fbuttonActive} onClick={callBackProcess}>{trueName}</button> :
        <button disabled={isAnalysis === z} className={css.fbuttonPassive} onClick={callBackProcess}>{falseName}</button>

    return (
        <div className={css.fbuttonArea}>
            <div className={css.invisibleTextH}>{falseName.length > trueName.length ? falseName : trueName}</div>
            <div>{a}</div>
        </div>
    );
};

export default FButton;