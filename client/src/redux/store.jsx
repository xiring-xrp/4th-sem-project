import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/authSlice";
import clothingSliceReducer from "./slices/clothingSlice";
const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        clothing:clothingSliceReducer
    },
    devTools: true
});

export default store;