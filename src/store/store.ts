import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './basket/basket'

export const store = configureStore({
    reducer: reducer,
})