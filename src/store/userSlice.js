import { createSlice } from "@reduxjs/toolkit"

let user = createSlice({
    name: 'user',
    initialState: { name: 'Tigers', v: 13 },
    reducers: {
        changeName(state) {
            state.name = 'KIA Tigers'
        },
        addV(state, action) {
            state.v += action.payload
        }
    }
})
export let { changeName, addV } = user.actions;

export default user;