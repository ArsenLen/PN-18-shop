import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : "cart",
    initialState : {
        quantity : 0,
        products : [],
    },
    reducers : {
        addToCart : (state, action) => {
            state.quantity = action.payload.quantity
            state.products.push(action.payload.product)     
        }
    }
})

export const { addToCart } = productSlice.actions
export default productSlice.reducer