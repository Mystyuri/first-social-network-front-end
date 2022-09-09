import {applyMiddleware} from "redux";
import thunkMiddleWare from "redux-thunk"
import {configureStore} from "@reduxjs/toolkit";
import {composeWithDevTools} from "redux-devtools-extension";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

const rootReducer = {
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer,
}
export const reduxStore = configureStore({reducer: rootReducer}, applyMiddleware(thunkMiddleWare),composeWithDevTools)