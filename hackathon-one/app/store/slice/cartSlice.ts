import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface cartState {
    items: Array<product>,
    totalAmount: number,
    totalQuantity: number,
};

export type product = {
    id: number,
    name: string,
    price: number,
    quantity: number,
}

export const initialState: cartState = {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            const newProduct: product = action.payload.product;
            const alreadyExistingProduct = state.items.find((product) => product.id === newProduct.id)
            if (alreadyExistingProduct) {
                const productIndex = state.items.findIndex((product) => product.id === newProduct.id);
                state.items.splice(productIndex, 1, {
                    ...newProduct,
                    quantity: newProduct.quantity++,
                });
            } else {
                state.items.push(newProduct);
                state.totalQuantity += action.payload.quantity;
                state.totalAmount += newProduct.price;
            }
        },
        removeFromCart: (state, action: PayloadAction<any>) => {
            state.totalQuantity -= action.payload.quantity;
        },
        clearCart: (state) => {
            state.items = initialState.items;
            state.totalAmount = initialState.totalAmount;
            state.totalQuantity = initialState.totalQuantity;
        },
    },
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;