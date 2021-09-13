import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './login'
export const store = configureStore({
    reducer: {
        login: loginSlice
    }
})
