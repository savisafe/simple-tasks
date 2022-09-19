import {createSlice} from "@reduxjs/toolkit";

const userName = createSlice({
    name: 'userName',
    initialState: {
        userName: 'Пользователь',
        cardsColOne: [],
        cardsColTwo: [],
        cardsColThree: [],
        cardsColFour: [],
    },
    reducers: {
        setUserName: (state, action) => {
            console.log('name', action)
            state.userName = action.payload
        },
        setCardsColOne: (state: any, action) => {
            console.log('cards', action)
            return {...state, cardsColOne: [...state.cardsColOne, action.payload]}
        },
        removeCardColOne: (state: any, action) => {
            console.log('remove', action)
            state.cardsColOne = state.cardsColOne.filter((e: any) => e.id !== action.payload)
        },
        changeCardColOne: (state: any, action) => {
            console.log('change', action)
            let i = state.cardsColOne.findIndex( (e:any) => e.id === action.payload.id)
            state.cardsColOne[i] = {
                ...state.cardsColOne[i],
                title: state.cardsColOne[i].title = action.payload.title,
                text: state.cardsColOne[i].text = action.payload.text,
            }
        },
        setCardsColTwo: (state: any, action) => {
            return {...state, cardsColTwo: [...state.cardsColTwo, action.payload]}
        },
        setCardsColThree: (state: any, action) => {
            return {...state, cardsColThree: [...state.cardsColThree, action.payload]}
        },
        setCardsColFour: (state: any, action) => {
            return {...state, cardsColFour: [...state.cardsColFour, action.payload]}
        },
    }
})

export const {
    setUserName,
    setCardsColOne,
    removeCardColOne,
    changeCardColOne,
    setCardsColTwo,
    setCardsColThree,
    setCardsColFour,
} = userName.actions
export default userName.reducer