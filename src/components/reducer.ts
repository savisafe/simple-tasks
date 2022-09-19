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
            console.log('name', action)
            state.userName = action.payload
        },
        setCardsToDo: (state:any, action) => {
            console.log('cards', action)
            return {...state, cardsToDo: [...state.cardsToDo, action.payload]}
        },
        removeCardToDo: (state:any, action) => {
            console.log('remove', action)
            state.cardsToDo = state.cardsToDo.filter( (e:any) => e.id !== action.payload)
        },
        changeCardToDo: (state, action) => {
            console.log('change', action)
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
    removeCardToDo,
    setCardsInProgress,
    setCardsTesting,
    setCardsDone,
} = userName.actions
export default userName.reducer