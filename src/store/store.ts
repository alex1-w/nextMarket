import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as basketReducer } from './basket/basket'
import { api } from '@/http/api'

const mainReducer = combineReducers({
    basket: basketReducer,
    [api.reducerPath]: api.reducer
})

export const store = configureStore({
    reducer: {
        reducer: mainReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})