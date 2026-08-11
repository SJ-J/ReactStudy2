import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: 'tigers'
})

let year = createSlice({
    name: 'year',
    initialState: [3, 4, 5]
})

let wishlist = createSlice({
    name: 'wishlist',
    initialState: [
        {id: 3, name: '김호령', position: '외야수', fa: '26시즌 이후', salary: '2억 5,000만'},
        {id: 5, name: '김태군', position: '포수', fa: '26시즌 이후', salary: '6억'}
    ]
})

export default configureStore({
  reducer: { 
    user        : user.reducer,
    year        : year.reducer,
    wishlist    : wishlist.reducer
   }
})