import {createSlice} from "@reduxjs/toolkit";

const userName = createSlice({
    name: 'userName',
    initialState: {
        userName: 'Пользователь',
        cardsToDo: [],
    },
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setCardsToDo: (state:any, action) => {
            return {...state, cardsToDo: [...state.cardsToDo, action.payload]}
        },
    }
})

export const {
    setUserName,
    setCardsToDo,
} = userName.actions
export default userName.reducer