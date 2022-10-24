import {createSlice} from "@reduxjs/toolkit";

const userName = createSlice({
    name: 'userName',
    initialState: {
        userName: 'Пользователь',
        cards: [],
    },
    reducers: {
        createUserName: (state, action) => {
            state.userName = action.payload
        },
        createCards: (state: any, action) => {
            return {...state, cards: [...state.cards, action.payload]}
        },
        removeCard: (state: any, action) => {
            state.cards = state.cards.filter((e: any) => e.id !== action.payload)
        },
        changeCard: (state: any, action) => {
            let i = state.cards.findIndex((e: any) => e.id === action.payload.id)
            state.cards[i] = {
                ...state.cards[i],
                title: state.cards[i].title = action.payload.title,
                text: state.cards[i].text = action.payload.text,
            }
            console.log(i)
        },
        createComment: (state: any, action) => {
            let i = state.cards.findIndex((e: any) => e.id === action.payload.id)
            state.cards[i].comments.push({
                commentId: Date.now(),
                comment: action.payload.comments,
            })
        },
        changeComment: (state: any, action) => {

        },
        removeComment: (state: any, action) => {
            let i = state.cards.findIndex((e: any) => e.commentId === action.payload.commentId)
            state.cards[i].comments = state.cards[i].comments.filter((e: any) => e.commentId !== action.payload)
        },
    }
})

export const {
    createUserName,
    createCards,
    removeCard,
    changeCard,
    createComment,
    changeComment,
    removeComment,
} = userName.actions
export default userName.reducer