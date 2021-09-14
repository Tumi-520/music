import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        show: false,
        login:false
    },
    reducers: {
        changeShow(state, { payload }) {
            state.show = payload
        }
    }
})

export const { changeShow } = loginSlice.actions
export default loginSlice.reducer