import { configureStore } from "@reduxjs/toolkit";
import userNameReducer from "./components/reducer"

export const store = configureStore({
    reducer: {
        userName: userNameReducer,
    },
})