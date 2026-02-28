import { configureStore } from "@reduxjs/toolkit";
import ibadahReducer  from "../features/ibadah/ibadahSlice";
import  duaReducer from "../features/dua/duaSlice";

export const store = configureStore({
    reducer: {
        ibadah: ibadahReducer,
        dua: duaReducer

    }
})