import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UsersAPI} from "../dal/api";

export const getUsersThunk = createAsyncThunk(
    "usersReducer/getUsersThunk",
    async function (currentPage, ThunkAPI) {
        const currentPageStore = ThunkAPI.getState().usersReducer.pageData.currentPage
        const pageInformationSize = ThunkAPI.getState().usersReducer.pageData.pageInformationSize
        return await UsersAPI.getUsersAPI(currentPage = currentPageStore, pageInformationSize)
    }
)

export const setFollowThunk = createAsyncThunk(
    "usersReducer/setFollowThunk",
    async function ({id, followLogic}, ThunkAPI) {
        const currentPage = ThunkAPI.getState().usersReducer.pageData.currentPage
        const pageInformationSize = ThunkAPI.getState().usersReducer.pageData.pageInformationSize

        await UsersAPI.FollowAPI(id, followLogic)
        return await UsersAPI.getUsersAPI(currentPage, pageInformationSize)
    }
)

const setUsersActionCreator = (state, action) => {
    state.data = action.payload.items;
    state.pageData.totalCount = action.payload.totalCount
    state.isLoaded = true
}

const usersReducer = createSlice({
    name: "usersReducer",
    initialState: {
        data: [],
        pageData: {
            totalCount: 1,
            pageInformationSize: 10,
            currentPage: 1,
        },
        newText: "",
        isLoaded: false
    },
    reducers: {
        setCurrentPage(state, action) {
            if (action.payload > 0 && action.payload <= Math.ceil(state.pageData.totalCount / state.pageData.pageInformationSize)) {
                state.pageData.currentPage = action.payload
                state.isLoaded = false
            }
        }
    },
    extraReducers: {
        [getUsersThunk.fulfilled]: setUsersActionCreator,
        [setFollowThunk.fulfilled]: setUsersActionCreator,
    },
})

export default usersReducer.reducer
export const {setCurrentPage} = usersReducer.actions