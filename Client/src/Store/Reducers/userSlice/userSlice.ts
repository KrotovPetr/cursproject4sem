import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUserSlice{
    isUserDataRequestSend: boolean,
    isUserDataRequestSuccess: boolean,
    isUserDataRequestError: boolean,
    userData: null | any,
    userToken: null | string,
    fetchErrorData: string,
    isLogin: boolean
}

const userInitialState: IUserSlice = {
    isUserDataRequestSend: false,
    isUserDataRequestSuccess: false,
    isUserDataRequestError: false,
    userData: null,
    userToken: null,
    fetchErrorData: "",
    isLogin: false
};


export const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        changeLogin(state, action: PayloadAction<boolean>){
            state.isLogin = action.payload
        }
    },
});

export default userSlice.reducer;
