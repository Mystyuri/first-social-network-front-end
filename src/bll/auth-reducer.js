import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AuthAPI} from "../dal/api";

export const authMeThunk = createAsyncThunk(
    "authReducer/authMeThunk",
    async function () {
        return await AuthAPI.Me()
    }
)

export const getAuthThunk = createAsyncThunk(
    "authReducer/getAuthThunk",
    async function (arg, thunkAPI) {

        let x = await AuthAPI.getAuth(arg)

        if (x.resultCode === 10) await thunkAPI.dispatch(getCaptchaThunk())
        if (x.resultCode > 0) return x

        return await thunkAPI.dispatch(authMeThunk())
    }
)

export const deleteAuthThunk = createAsyncThunk(
    "authReducer/deleteAuthThunk",
    async function (arg, thunkAPI) {
        await AuthAPI.deleteAuth()
        return await thunkAPI.dispatch(authMeThunk())
    }
)

export const getCaptchaThunk = createAsyncThunk(
    "authReducer/getCaptchaThunk",
    async function (arg, thunkAPI) {
        return await AuthAPI.getCaptcha()
    }
)

const setAuthDataAction = (state, action) => {
    if (action.payload.resultCode !== 0) {
        state.data = {
            id: 0,
            login: "Anonimus",
            email: "",
        }
        state.message = action.payload.messages
        state.isAuth = false
    } else {
        state.data = action.payload.data
        state.message = ""
        state.isAuth = true
        state.captchaUrl = ""
}
}

const setCaptchaUrlAction = (state, action) => {
    state.captchaUrl = action.payload.url
}

const authReducer = createSlice({
    name: "authReducer",
    initialState: {
        data: {
            id: 0,
            login: "Anonimus",
            email: "",
        },
        isAuth: "initialise",
        message: "",
        captchaUrl: "",
    },
    reducers: {
        isOnAction(state, action) {
            state.isOn = action.payload
        },
        setAuthData(state, action) {
            setAuthDataAction(state, action)
        }
    },
    extraReducers: {
        [authMeThunk.fulfilled]: setAuthDataAction,
        [getAuthThunk.fulfilled]: (state, action) => {

            action.payload.resultCode > 0 && setAuthDataAction(state, action)
        },
        [deleteAuthThunk.fulfilled]: x => x,
        [getCaptchaThunk.fulfilled]: setCaptchaUrlAction,
    }
})


export default authReducer.reducer
export const {isOnAction} = authReducer.actions