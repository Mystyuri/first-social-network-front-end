import {connect} from "react-redux";
import Profile from "./Profile";
import {
    changeTextFormAction,
    addNewInfoAction,
    setCurrentProfile,
    setCurrentIdProfile,
    setStatusThunk,
    getStatusThunk,
    getProfileThunk,
    setNewProfileAvatarThunk,
    setNewProfileInfoThunk
} from "../../../bll/profile-reducer";
import React from "react";
import FPreloader from "../../../formulas/FPreloader";
import {compose} from "redux";
import {authRedirectHoc} from "../../../hoc/AuthRedirectHoc";
import {withRouterHoc} from "../../../hoc/withRouterHoc";
import authReducer from "../../../bll/auth-reducer";

// class ProfileAPI extends React.Component {
//     componentDidMount() {
//         (this.props.router.params["*"] !== this.props.state.idProfile) && this.props.setCurrentIdProfile(this.props.router.params["*"]);
//         (this.props.router.params["*"] === this.props.state.idProfile) && !this.props.state.isLoaded && this.props.getProfileThunk(this.props.state.idProfile)
//     }
//     // static getDerivedStateFromProps(props, state) {
//     //     (props.router.params["*"] !== props.state.idProfile) && props.setCurrentIdProfile(props.router.params["*"]);
//     //     (props.router.params["*"] === props.state.idProfile) && !props.state.isLoaded && props.getProfileThunk(props.router.params["*"])
//     //     
//     // }
//     componentDidUpdate() {
//         (this.props.router.params["*"] !== this.props.state.idProfile) && this.props.setCurrentIdProfile(this.props.router.params["*"]);
//         (this.props.router.params["*"] === this.props.state.idProfile) && !this.props.state.isLoaded && this.props.getProfileThunk(this.props.state.idProfile)
//     }
//
//
//     render() {
//          return (this.props.router.params["*"] === this.props.state.idProfile) && this.props.state.isLoaded ? <Profile {...this.props}/> : <FPreloader/>
//     }
// }


class ProfileAPI extends React.Component {
    isMyProfile() {
        if (this.props.auth.data.id === this.props.state.data.userId) return true
        return false
    }

    refreshProps() {
        (this.props.router.params["*"] !== this.props.state.idProfile) && this.props.setCurrentIdProfile(this.props.router.params["*"]);
        (this.props.router.params["*"] === this.props.state.idProfile) && !this.props.state.isLoaded && this.props.getProfileThunk(this.props.state.idProfile)
    }

    componentDidMount() {
        this.refreshProps()
    }
    // static getDerivedStateFromProps(props, state) {
    //     (props.router.params["*"] !== props.state.idProfile) && props.setCurrentIdProfile(props.router.params["*"]);
    //     (props.router.params["*"] === props.state.idProfile) && !props.state.isLoaded && props.getProfileThunk(props.router.params["*"])
    //     
    // }
    componentDidUpdate() {
        this.refreshProps()
    }


    render() {
         return (this.props.router.params["*"] === this.props.state.idProfile) && this.props.state.isLoaded ? <Profile {...this.props} isMyProfile={this.isMyProfile()} setNewAvatar={this.props.setNewProfileAvatarThunk} setNewProfileInfo={this.props.setNewProfileInfoThunk}/> : <FPreloader/>
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.profileReducer,
        myID: state.authReducer.data.id,
    }
}

const mapDispatchToProps = {
    changeTextFormAction,
    addNewInfoAction,
    setCurrentProfile,
    setCurrentIdProfile,
    setStatusThunk,
    getStatusThunk,
    getProfileThunk,
    setNewProfileAvatarThunk,
    setNewProfileInfoThunk,
}


export const ProfileContainer = compose(authRedirectHoc,withRouterHoc,connect(mapStateToProps, mapDispatchToProps))(ProfileAPI)