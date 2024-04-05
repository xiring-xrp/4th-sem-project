import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/authSlice";
import clothingSliceReducer from "./slices/clothingSlice";
import fabricSliceReducer from "./slices/fabricSlice";
const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        clothing:clothingSliceReducer,
        fabric:fabricSliceReducer
    },
    devTools: true
});

export default store;