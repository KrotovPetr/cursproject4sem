import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./Reducers/fetchDataSliceDir/fetchDataSlice";
import {loginAPI} from "./ApiQuery/UserService";
const rootReducer = combineReducers({
    userReducer,
    [loginAPI.reducerPath]: loginAPI.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware)=>
            getDefaultMiddleware().concat(loginAPI.middleware)

    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
