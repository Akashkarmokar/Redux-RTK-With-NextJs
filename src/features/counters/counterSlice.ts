import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, value: 0 },
    { id: 2, value: 10 },
];

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state, action) => {
            const counterIndex = state.findIndex(
                (c) => c.id === action.payload
            );
            if (counterIndex !== -1) {
                state[counterIndex].value += 1;
            }
        },
        decrement: (state, action) => {
            const counterIndex = state.findIndex(
                (c) => c.id === action.payload
            );
            if (counterIndex !== -1) {
                state[counterIndex].value -= 1;
            }
        },
    },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
