import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/authSlice";
import clothingSliceReducer from "./slices/clothingSlice";
import fabricSliceReducer from "./slices/fabricSlice";
import measurementSliceReducer from "./slices/measurementSlice";
const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        clothing:clothingSliceReducer,
        fabric:fabricSliceReducer,
        measurement:measurementSliceReducer
    },
    devTools: true
});

export default store;