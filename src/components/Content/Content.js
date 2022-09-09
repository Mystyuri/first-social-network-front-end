import {Route, Routes} from "react-router-dom";
import News from "./News/News";
import {ProfileContainer} from "./Profile/ProfileContainer";
import {DialogsConteiner} from "./Dialogs/DialogsConteiner";
import {UsersConteiner} from "./Users/UsersConteiner";
import {AuthFormContainer} from "../Auth/AuthForm/AuthFormContainer";
import React from "react";

const Content = () => {
    return (
        <div>
            <Routes>
                <Route index element={<ProfileContainer/>}/>
                <Route path="profile/*" element={<ProfileContainer/>}/>
                <Route path="dialogs/*" element={<DialogsConteiner/>}/>
                <Route path="users/*" element={<UsersConteiner/>}/>
                <Route path="news/*" element={<News/>}/>
                <Route path="login" element={<AuthFormContainer/>}/>
            </Routes>
        </div>
    );
};

export default Content