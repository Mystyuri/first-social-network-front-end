import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ProfileAPI} from "../dal/api";

export const setStatusThunk = createAsyncThunk(
    "profileReducer/setStatusThunk",
    async function (text, ThunkAPI) {
        await ProfileAPI.setStatus(text)
        return await ThunkAPI.dispatch(getStatusThunk({}))
    }
)

export const getStatusThunk = createAsyncThunk(
    "profileReducer/getStatusThunk",
    async function ({},ThunkAPI) {
        const idProfile = ThunkAPI.getState().profileReducer.data.userId
        let status = await ProfileAPI.getStatus(idProfile)
        return {status}
    }
)

export const getProfileThunk = createAsyncThunk(
    "profileReducer/getProfileThunk",
    async function (profileID,ThunkAPI) {
        const ProfileID = profileID || ThunkAPI.getState().authReducer.data.id
        let profile = await ProfileAPI.getProfile(ProfileID)
        let status = await ProfileAPI.getStatus(ProfileID)

        return {profile,status}
    }
)

export const setNewProfileAvatarThunk = createAsyncThunk(
    "profileReducer/setNewProfileAvatarThunk",
    async function (img,ThunkAPI) {
        await ProfileAPI.setNewAvatar(img)
        let profile = await ProfileAPI.getProfile(ThunkAPI.getState().authReducer.data.id)
        return {profile}
    }
)

export const setNewProfileInfoThunk = createAsyncThunk(
    "profileReducer/setNewProfileInfoThunk",
    async function (data,ThunkAPI) {
        await ProfileAPI.setNewProfileInfo(data)
        let profile = await ProfileAPI.getProfile(ThunkAPI.getState().authReducer.data.id)
        
        return {profile}
    }
)

const setCurrentProfileAction = (state, action) => {

    action.payload.profile !== undefined && (state.data = action.payload.profile)
    action.payload.status !== undefined && (state.status = action.payload.status)

    state.isLoaded = true
}


const
profileReducer = createSlice({
    name: "profileReducer",
    initialState: {
        data: {
            aboutMe: "Обо мне",
            contacts: {
                facebook: 'facebook.com',
                website: null,
                vk: 'vk.com/dimych',
                twitter: 'https://twitter.com/@sdf',
                instagram: 'instagra.com/sds'
            },
            fullName: "Имя",
            lookingForAJob: true,
            lookingForAJobDescription: "описания работы",
            photos: {
                small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0',
                large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0'
            },
            userId: 0,
        },
        dataText: [
            // {id: 0, text: "блаблабла1", likes: 21},
        ],
        newText: "",
        status: "",
        idProfile: {},
        isLoaded: true,
    },
    reducers: {
        changeTextFormAction(state, action) {
            state.newText = action.payload;
        },
        addNewInfoAction(state, action) {
            state.dataText.push({
                id: Math.max(-1, ...state.dataText.map(el => el.id)) + 1,
                text: action.payload.text,
                likes: 0
            });
            state.newText = ""
        },
        setCurrentProfile: setCurrentProfileAction,
        setCurrentIdProfile(state, action) {

            state.idProfile = action.payload
            state.isLoaded = false
        },
    },
    extraReducers: {
        [setStatusThunk.fulfilled]: setCurrentProfileAction,
        [getStatusThunk.fulfilled]: setCurrentProfileAction,
        [getProfileThunk.fulfilled]: setCurrentProfileAction,
        [setNewProfileAvatarThunk.fulfilled]: setCurrentProfileAction,
        [setNewProfileInfoThunk.fulfilled]: setCurrentProfileAction,
    }
})

export default profileReducer.reducer
export const {changeTextFormAction, addNewInfoAction, setCurrentProfile, setCurrentIdProfile} = profileReducer.actions