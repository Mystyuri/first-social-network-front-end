import React from "react";
import {authMeThunk} from "../bll/auth-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import FPreloader from "../formulas/FPreloader";

const GlobalPreloader = (Component) => {
    const ComponentWithGlobalPreloader = (props) => {
        props.state.isAuth === "initialise" && props.authMeThunk()
        if (props.state.isAuth === "initialise") return <div style={{"color":"var(--background-color-2)"}}>App Loading...</div>
        return (
            <Component {...props}/>
        );
    }
    return ComponentWithGlobalPreloader;
}

const mapStateToProps = (state) => {
    return {
        state: state.authReducer
    }
}

const mapDispatchToProps = {
    authMeThunk,
}


export const GlobalPreloaderHoc = compose(connect(mapStateToProps, mapDispatchToProps),GlobalPreloader);