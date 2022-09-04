import {createSlice} from "@reduxjs/toolkit";

const userName = createSlice({
    name: 'userName',
    initialState: {
        userName: 'Пользователь',
        card: {
            title: '',
            text: '',
        },
    },
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setTitle: (state, action) => {
            state.card.title = action.payload
        },
        setText: (state, action) => {
            state.card.text = action.payload
        },
        resetCard: (state, action) => {
            state.card.title = ''
            state.card.text = ''
        }
    }
})

export const {
    setUserName,
    setTitle,
    setText,
    resetCard,
} = userName.actions
export default userName.reducer