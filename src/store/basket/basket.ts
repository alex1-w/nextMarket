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

        addToBasket: (state = initialState, { payload: product }) => {
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
            if (currentProduct?.count === 0) {
                return state.filter(item => item.product.id !== currentProduct.product.id)
            }

            if (currentProduct) {
                state.map(item => item.product.id === currentProduct.product.id
                    ?
                    item.count = item.count - 1
                    :
                    item.count
                )
            }
        },

        deleteProduct: (state, { payload: product }) => {
            const exist = state.find(p => p.product.id === product)

            if (exist) {
                const i = state.findIndex(p => p.product.id === product)
                if (i !== -1) state.splice(i, 1)
            }
        },

        cleanBasket: (state) => { state.length = 0 },

    }
})


export const { actions, reducer } = basketSlice