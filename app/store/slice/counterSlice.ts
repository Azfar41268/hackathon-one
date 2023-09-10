import { createSlice } from "@reduxjs/toolkit";

export interface counterState {
    quantity: number,
};

export const initialState: counterState = {
    quantity: 1
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.quantity += 1;
        },
        decrement: (state) => {
            state.quantity -= 1;
        }
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;