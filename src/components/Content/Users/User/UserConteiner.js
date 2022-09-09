import React from 'react';
import User from "./User";

class UserConteiner extends React.Component {
    render() {
        return <User {...this.props}/>
    }
}

export default UserConteiner;