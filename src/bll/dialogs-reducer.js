import {createSlice} from "@reduxjs/toolkit";

const dialogsReducer = createSlice({
    name: "dialogsReducer",
    initialState: {
        data: [
            {
                id: 0, name: "Yuri", texts: [
                    {id: 0, text: "Привет"},
                    {id: 1, text: "Как дела?"},
                    {id: 2, text: "к сожалению, эти диалоги никуда не посылаются, но можно добавлять"},
                ]
            },
            {id: 1, name: "User1", texts: [{id: 0, text: "привет"}]},
            {id: 2, name: "User2", texts: [{id: 0, text: "fsadf"}]},
            {id: 3, name: "Ana", texts: [{id: 0, text: "глобальненько"}]},
            {id: 4, name: "Gold", texts: [{id: 0, text: "Золотой =)"}]},
            {id: 5, name: "ISJFDLij", texts: [{id: 0, text: "абракадабра"}]},
            {id: 6, name: "sdf", texts: [{id: 0, text: "sfdfa32asdfssdf"}]},
            {
                id: 7, name: "Yuri2", texts: [
                    {id: 0, text: "Нет"},
                    {id: 1, text: "4234fas"},
                    {id: 2, text: "f645as"},
                ]
            },
            {
                id: 8, name: "REdux", texts: []
            },
        ],
        newText: "",
    },
    reducers: {
        changeTextFormAction(state, action) {
            state.newText = action.payload;
        },
        addNewInfoAction(state, action) {

            state.data[action.payload.id].texts.push({id: Math.max(-1,...state.data[action.payload.id].texts.map(el => el.id)) + 1, text: action.payload.text});
            state.newText = ""
        },
    }
})

export default dialogsReducer.reducer
export const {changeTextFormAction, addNewInfoAction} = dialogsReducer.actions