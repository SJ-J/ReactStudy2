import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

let wishlist = createSlice({
    name: 'wishlist',
    initialState: [
        {id: 3, name: '김호령', position: '외야수', fa: '26시즌 이후', salary: '2억 5,000만', years: 0},
        {id: 5, name: '김태군', position: '포수', fa: '26시즌 이후', salary: '6억', years: 0}
    ],
    reducers: {
        addYears(state, action) {
            // id가 일치하는 항목을 find()로 찾음
            let id = action.payload;
            let item = state.find( item => item.id == id );
            console.log(id);
            if (item) {
                item.years += 1;
            }
        }
    }
})
export let { addYears } = wishlist.actions;

export default configureStore({
  reducer: { 
    user        : user.reducer,
    wishlist    : wishlist.reducer
   }
})