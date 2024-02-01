import { configureStore } from "@reduxjs/toolkit";
import showSliceReducer from "./Slices/showSlice";

export const store = configureStore({
    reducer:{
        shows:showSliceReducer,
    }
});