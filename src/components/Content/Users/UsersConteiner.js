import {connect} from "react-redux";
import Users from "./Users";
import {getUsersThunk, setCurrentPage, setFollowThunk} from "../../../bll/users-reducer";
import React from "react";
import {compose} from "redux";
import {authRedirectHoc} from "../../../hoc/AuthRedirectHoc";

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk({})
    }

    getUsers = (e) => {
        this.props.getUsersThunk(e)
    }
    setFollow = (id, followLogic) => {
        this.props.setFollowThunk({id, followLogic})
    }

    render() {
        return <>
            <Users
                state={this.props.state}
                setCurrentPage={this.props.setCurrentPage}
                getUsers={this.getUsers}
                setFollowed={this.setFollow}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.usersReducer
    }
}

const mapDispatchToProps = {
    setCurrentPage,
    getUsersThunk,
    setFollowThunk,
}

export const UsersConteiner = compose(authRedirectHoc,connect(mapStateToProps, mapDispatchToProps))(UsersAPI)