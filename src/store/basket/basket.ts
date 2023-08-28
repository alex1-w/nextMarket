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

            } else {
                return [
                    ...state,
                    {
                        count: 1,
                        product
                    }
                ]
            }
        },
        deleteFromBasket: (state, product) => { 

        }
    }
})


export const { actions, reducer } = basketSlice