import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice';
import counterSlice from './slice/counterSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        counter: counterSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>

export default store;