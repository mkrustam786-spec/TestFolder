import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./ReduxToolkit/UserSlice";
export const store=configureStore({
    reducer:{
        user:userReducer
        
    }
})