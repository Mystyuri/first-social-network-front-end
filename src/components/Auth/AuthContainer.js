import React, {PureComponent} from 'react';
import Auth from "./Auth";
import {connect} from "react-redux";
import {authMeThunk, deleteAuthThunk, isOnAction} from "../../bll/auth-reducer";

class AuthAPI extends PureComponent {
    componentDidMount() {
        // this.props.authMeThunk()

    }

    render() {
        return (
            <div>
                <Auth name={this.props.state.data.login} id={this.props.state.data.id} isOn={this.props.state.isAuth} logoutAuth={this.props.deleteAuthThunk}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.authReducer
    }
}

const mapDispatchToProps = {
    authMeThunk,
    deleteAuthThunk,
    isOnAction,
}

export const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(AuthAPI)