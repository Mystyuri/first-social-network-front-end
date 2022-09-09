import React from 'react';
import AuthForm from "./AuthForm";
import {authMeThunk, getAuthThunk} from "../../../bll/auth-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {authRedirectHoc} from "../../../hoc/AuthRedirectHoc";

const AuthFormComponent = (props) => {

    return (
            <AuthForm logic={props.state.isAuth} authAction={props.getAuthThunk} error={props.state.message} imgCaptchaUrl={props.state.captchaUrl}/>
    );
};

const mapStateToProps = (state) => {
    return {
        state: state.authReducer
    }
}

const mapDispatchToProps = {
    authMeThunk,
    getAuthThunk,
}



export const AuthFormContainer = compose(authRedirectHoc,connect(mapStateToProps, mapDispatchToProps))(AuthFormComponent);