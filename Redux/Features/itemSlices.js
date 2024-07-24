import { createSlice } from '@reduxjs/toolkit'

export const ProductsSlice = createSlice({
    name: 'Products',
    initialState: [],
    reducers: {
        addToCard: (state, action) => {
            state.push(action.payload);
        },
        DeleteToCardItem: (state, action) => {
            state.pop(action.payload);
        },
    },
});


export const { addToCard, DeleteToCardItem } = ProductsSlice.actions;
export default ProductsSlice.reducer;
