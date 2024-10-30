import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userWalaSlice } from "./slices/user";
import { productSlice } from "./slices/product";


let rootReducer = combineReducers({
    userWalaSlice:userWalaSlice.reducer, 
    productSlice:productSlice.reducer
});

export let meraStore = configureStore({
    reducer: rootReducer
});

