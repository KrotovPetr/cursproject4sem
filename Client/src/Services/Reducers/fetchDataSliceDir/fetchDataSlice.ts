import {IUser} from "../../../Utils/Interfaces/interfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUserData} from "../../Actions/actions";

interface IUserSlice{
    isUserDataRequestSend: boolean,
    isUserDataRequestSuccess: boolean,
    isUserDataRequestError: boolean,
    userData: null | any,
    userToken: null | string,
    fetchErrorData: string
}

const userInitialState: IUserSlice = {
    isUserDataRequestSend: false,
    isUserDataRequestSuccess: false,
    isUserDataRequestError: false,
    userData: null,
    userToken: null,
    fetchErrorData: ""
};


export const userReducer = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {

        userFetchSuccess(state, action: PayloadAction<any>){
            state.isUserDataRequestSend = false;
            state.isUserDataRequestSuccess = true;
            state.isUserDataRequestError = false;
        },

        userFetchSend(state){
            state.isUserDataRequestSend = true;
            state.isUserDataRequestSuccess = false;
            state.isUserDataRequestError = false;
        },

        userFetchError(state, action: PayloadAction<string>){
            state.isUserDataRequestSend = false
            state.isUserDataRequestSuccess = false;
            state.isUserDataRequestError = true;
        },

    },
    extraReducers: {
        [fetchUserData.fulfilled.type]:(state, action: PayloadAction<any>)=>{
            state.userData = action
            state.isUserDataRequestSend = false;
            state.isUserDataRequestSuccess = true;
            state.isUserDataRequestError = false;
        },
        [fetchUserData.pending.type]:(state)=>{
            state.isUserDataRequestSend = true;
            state.isUserDataRequestSuccess = false;
            state.isUserDataRequestError = false;
        },
        [fetchUserData.rejected.type]:(state, action: PayloadAction<any>)=>{
            state.isUserDataRequestSend = false;
            state.isUserDataRequestSuccess = false;
            state.isUserDataRequestError = true;
        },
    }
});

export default userReducer.reducer;
