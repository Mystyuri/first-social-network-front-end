import React from 'react';
import {Route, Routes} from "react-router-dom";
import FTextCloud from "../../../../formulas/FTextCloud";
import css from "./Dialog.module.css"
import FForm from "../../../../formulas/FForm";



const Dialog = (props) => {
    const fDataDialog = props.props.state.data.map(d => <Route path={d.id.toString()} element={<div className={css.dialog}><FTextCloud state={d.texts}/><FForm id={d.id} state={props.props.state} changeTextFormAction={props.props.changeTextFormAction} addNewInfoAction={props.props.addNewInfoAction}/></div>}/>)
    // const fDataDialog = state.data.map(d => <FForm state={state}/>)
    return (
        <div>
            <Routes>
                {fDataDialog}
            </Routes>
        </div>
    );
};

export default Dialog;