import  { createSlice} from "@reduxjs/toolkit";

const userName = createSlice({
    name: 'userName',
    initialState: {
        userName: 'Пользователь',
        card: {
            nameCard: '',
            valueCard: '',
            id: 0,
        },
    },
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setCard: (state, action) => {
            state.card.nameCard = action.payload
            state.card.valueCard = action.payload
            state.card.id += 1
        },
        resetCard: (state, action) => {
            state.card.nameCard = ''
            state.card.valueCard = ''
            state.card.id = 0
        }
    }
})

export const { setUserName, setCard, resetCard } = userName.actions
export default userName.reducer