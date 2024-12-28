import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './reducers/ProductSlice'


export const store = configureStore({
  reducer: {
    products: productsSlice
  }
})