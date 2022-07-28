import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../Services/CryptoApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
})