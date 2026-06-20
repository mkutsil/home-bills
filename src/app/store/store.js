import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../features/counter/slice/counterSlice';
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
