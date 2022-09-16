import {createSlice} from "@reduxjs/toolkit";

const userName = createSlice({
    name: 'userName',
    initialState: {
        userName: 'Пользователь',
        cardsToDo: [],
        cardsInProgress: [],
        cardsTesting: [],
        cardsDone: [],
    },
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setCardsToDo: (state:any, action) => {
            return {...state, cardsToDo: [...state.cardsToDo, action.payload]}
        },
        setCardsInProgress: (state:any, action) => {
            return {...state, cardsInProgress: [...state.cardsInProgress, action.payload]}
        },
        setCardsTesting: (state:any, action) => {
            return {...state, cardsTesting: [...state.cardsTesting, action.payload]}
        },
        setCardsDone: (state:any, action) => {
            return {...state, cardsDone: [...state.cardsDone, action.payload]}
        },
    }
})

export const {
    setUserName,
    setCardsToDo,
    setCardsInProgress,
    setCardsTesting,
    setCardsDone,
} = userName.actions
export default userName.reducer