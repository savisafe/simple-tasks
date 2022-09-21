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
            state.userName = action.payload
        },
        setCardsColOne: (state: any, action) => {
            return {...state, cardsColOne: [...state.cardsColOne, action.payload]}
        },
        removeCardColOne: (state: any, action) => {
            state.cardsColOne = state.cardsColOne.filter((e: any) => e.id !== action.payload)
        },
        changeCardColOne: (state: any, action) => {
            let i = state.cardsColOne.findIndex( (e:any) => e.id === action.payload.id)
            state.cardsColOne[i] = {
                ...state.cardsColOne[i],
                title: state.cardsColOne[i].title = action.payload.title,
                text: state.cardsColOne[i].text = action.payload.text,
            }
        },
        createCommentColOne: (state: any, action) => {
            console.log(action)
            let i = state.cardsColOne.findIndex( (e:any) => e.id === action.payload.id)
            state.cardsColOne[i] = {
                ...state.cardsColOne[i],
                comments: [action.payload.comments],
            }
        },

        setCardsColTwo: (state: any, action) => {
            return {...state, cardsColTwo: [...state.cardsColTwo, action.payload]}
        },
        removeCardColTwo: (state: any, action) => {
            state.cardsColTwo = state.cardsColTwo.filter((e: any) => e.id !== action.payload)
        },
        changeCardColTwo: (state: any, action) => {
            let i = state.cardsColTwo.findIndex( (e:any) => e.id === action.payload.id)
            state.cardsColTwo[i] = {
                ...state.cardsColTwo[i],
                title: state.cardsColTwo[i].title = action.payload.title,
                text: state.cardsColTwo[i].text = action.payload.text,
            }
        },

        setCardsColThree: (state: any, action) => {
            return {...state, cardsColThree: [...state.cardsColThree, action.payload]}
        },
        removeCardColThree: (state: any, action) => {
            state.cardsColThree = state.cardsColThree.filter((e: any) => e.id !== action.payload)
        },
        changeCardColThree: (state: any, action) => {
            let i = state.cardsColThree.findIndex( (e:any) => e.id === action.payload.id)
            state.cardsColThree[i] = {
                ...state.cardsColThree[i],
                title: state.cardsColThree[i].title = action.payload.title,
                text: state.cardsColThree[i].text = action.payload.text,
            }
        },

        setCardsColFour: (state: any, action) => {
            return {...state, cardsColFour: [...state.cardsColFour, action.payload]}
        },
        removeCardColFour: (state: any, action) => {
            state.cardsColFour = state.cardsColFour.filter((e: any) => e.id !== action.payload)
        },
        changeCardColFour: (state: any, action) => {
            let i = state.cardsColFour.findIndex( (e:any) => e.id === action.payload.id)
            state.cardsColFour[i] = {
                ...state.cardsColFour[i],
                title: state.cardsColFour[i].title = action.payload.title,
                text: state.cardsColFour[i].text = action.payload.text,
            }
        },
    }
})

export const {
    setUserName,

    setCardsColOne,
    removeCardColOne,
    changeCardColOne,
    createCommentColOne,

    setCardsColTwo,
    removeCardColTwo,
    changeCardColTwo,

    setCardsColThree,
    removeCardColThree,
    changeCardColThree,

    setCardsColFour,
    removeCardColFour,
    changeCardColFour,
} = userName.actions
export default userName.reducer