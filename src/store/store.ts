import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "../features/counters/counterSlice";

const store = configureStore({
    reducer: {
        counters: counterSliceReducer,
    },
});
export default store;
