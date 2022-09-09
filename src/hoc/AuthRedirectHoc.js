import React from 'react';
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

const AuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        const x = useLocation()
        const navigate = useNavigate()

        if (!props.auth.isAuth && x.pathname !== "/login") return <Navigate to={"/login"}/>
        if (props.auth.isAuth && x.pathname === "/login") return navigate(-1)

        return <Component {...props}/>
    }
    return RedirectComponent
};

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer
    }
}

export const authRedirectHoc = compose(connect(mapStateToProps), AuthRedirect)

