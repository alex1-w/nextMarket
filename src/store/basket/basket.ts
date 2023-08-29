import { createSlice } from "@reduxjs/toolkit";

interface IBasketProduct {
    product: IProduct,
    count: number
}

const initialState: IBasketProduct[] = []

export const basketSlice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {

        addToBasket: (state = initialState, { payload: product },) => {
            const currentProduct = state.find(p => p.product.id === product.id)

            if (currentProduct) {
                const changCountProduct = currentProduct.count + 1
                state.map(item => item.product.id === currentProduct.product.id ? item.count = changCountProduct : item.count)
            }
            else {
                return [...state, { count: 1, product }]
            }
        },

        reduceProductBasket: (state, { payload: product }) => {
            const currentProduct = state.find(p => p.product.id === product.id)
            if (currentProduct?.count === 0) { return state.filter(item => item.product.id !== currentProduct.product.id) }

            if (currentProduct) {
                state.map(item => item.product.id === currentProduct.product.id
                    ?
                    item.count = item.count - 1
                    :
                    item.count
                )
            }
        },

        deleteProduct: (state, payload) => {
            console.log(payload);
            state = state.filter(p => p.product.id !== payload.payload)
            return [...state]
        }
    }
})


export const { actions, reducer } = basketSlice