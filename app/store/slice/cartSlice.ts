import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import ApiCall from "@/app/components/apiCall";
import { toast } from "react-hot-toast";

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
            async function api() {
                const items = await ApiCall("cart", "POST", newProduct);
                toast.success(items);
            };
            api();
        },
        removeFromCart: (state, action: PayloadAction<any>) => {
            state.totalQuantity -= action.payload.quantity;
            const id = action.payload.id;
            async function api() {
                const items = await ApiCall(`cart$id=${id}`, "DELETE");
                toast.error(items);
            };
            api();
        },
        clearCart: (state) => {
            state.items = initialState.items;
            state.totalAmount = initialState.totalAmount;
            state.totalQuantity = initialState.totalQuantity;
            async function api() {
                const products = await ApiCall("cart");
                for (let i = 1; i >= products.length; i++) {
                    await ApiCall(`cart$id=${i}`, "DELETE");
                }
                toast.success("Cart Cleared")
            };
            api();
        },
    },
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;