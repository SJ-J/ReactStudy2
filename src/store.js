import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

let wishlist = createSlice({
    name: 'wishlist',
    initialState: [
        {id: 3, no: 27, name: '김호령', position: '외야수', salary: 0, years: 0},
        {id: 5, no: 42, name: '김태군', position: '포수', salary: 0, years: 0}
    ],
    reducers: {
        addYears(state, action) {
            // id가 일치하는 항목을 find()로 찾음
            let id = action.payload;
            let item = state.find( item => item.id == id );
            if (item) {
                item.years += 1;
            }
        },
        addContract(state, action) {
            let { id, no, name, position, price } = action.payload;
            let player = {id: id, no: no, name: name, position: position, salary: price, years: 0}
            state.push(player);
            console.log(action.payload);
        }
    }
})
export let { addYears, addContract } = wishlist.actions;

export default configureStore({
  reducer: { 
    user        : user.reducer,
    wishlist    : wishlist.reducer
   }
})