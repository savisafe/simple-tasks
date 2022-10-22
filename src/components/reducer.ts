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
        createUserName: (state, action) => {
            state.userName = action.payload
        },
        createCardsColOne: (state: any, action) => {
            return {...state, cardsColOne: [...state.cardsColOne, action.payload]}
        },
        removeCardColOne: (state: any, action) => {
            state.cardsColOne = state.cardsColOne.filter((e: any) => e.id !== action.payload)
        },
        changeCardColOne: (state: any, action) => {
            let i = state.cardsColOne.findIndex((e: any) => e.id === action.payload.id)
            state.cardsColOne[i] = {
                ...state.cardsColOne[i],
                title: state.cardsColOne[i].title = action.payload.title,
                text: state.cardsColOne[i].text = action.payload.text,
            }
        },
        createCommentColOne: (state: any, action) => {
            let i = state.cardsColOne.findIndex((e: any) => e.id === action.payload.id)
            state.cardsColOne[i].comments.push({
                commentId: Date.now(),
                comment: action.payload.comments,
            })
        },
        updateCommentColOne: (state: any, action) => {
        },
        removeCommentColOne: (state: any, action) => {
            let i = state.cardsColOne.findIndex((e: any) => e.id === action.payload.id)
            state.cardsColOne = state.cardsColOne[i].comments.filter((e: any) => e.commentId !== action.payload)
        },
    }
})

export const {
    createUserName,

    createCardsColOne,
    removeCardColOne,
    changeCardColOne,
    createCommentColOne,
    updateCommentColOne,
} = userName.actions
export default userName.reducer