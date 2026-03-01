import { configureStore } from "@reduxjs/toolkit";
import ibadahReducer  from "../features/ibadah/ibadahSlice";
import  duaReducer from "../features/dua/duaSlice";
import { loadState, saveState } from "./localStorage";

export const store = configureStore({
    reducer: {
        ibadah: ibadahReducer,
        dua: duaReducer

    },
    preloadedState: loadState(),
});
store.subscribe(()=> {
    saveState(store.getState());
})