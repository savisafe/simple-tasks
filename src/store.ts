import { configureStore } from "@reduxjs/toolkit";
import userNameReducer from "./components/WelcomePopup/reducer"

export const store = configureStore({
    reducer: {
        userName: userNameReducer,
    },
})