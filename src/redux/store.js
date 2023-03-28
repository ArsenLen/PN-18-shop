import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import productReducer from './productSlice'

const store = configureStore({
    reducer : {
        product : productReducer,
        user: userReducer
    }
})

export default store

