import {IUser} from "../../../Utils/Interfaces/interfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUserData} from "../../Actions/actions";

export interface IUserSlice{
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

    },
    extraReducers: builder => {
        builder.addCase(fetchUserData.fulfilled, (state, action)=>{
                state.userData = action.payload
                state.isUserDataRequestSend = false;
                state.isUserDataRequestSuccess = true;
                state.isUserDataRequestError = false;
        })
        builder.addCase(fetchUserData.rejected, (state, action)=>{
                state.isUserDataRequestSend = false;
                state.isUserDataRequestSuccess = false;
                state.isUserDataRequestError = true;
        })
        builder.addCase(fetchUserData.pending, (state)=>{
                state.isUserDataRequestSend = true;
                state.isUserDataRequestSuccess = false;
                state.isUserDataRequestError = false;
        })
    }
});

export default userReducer.reducer;
