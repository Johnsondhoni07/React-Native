import mainSlice from "./mainSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore ({
    reducer:{meals:mainSlice.reducer},
    middleware:(getDefaultMiddleware) => getDefaultMiddleware ({
        serializableCheck:false
    })
})

export default store;