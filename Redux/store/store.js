import { configureStore } from '@reduxjs/toolkit'
import ProductsSlice from '../Features/itemSlices'

export const store = configureStore({
    reducer: ProductsSlice
})