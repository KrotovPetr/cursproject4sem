import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserSlice {
    isUserDataRequestSend: boolean;
    isUserDataRequestSuccess: boolean;
    isUserDataRequestError: boolean;
    userData: null | any;
    userToken: null | string;
    fetchErrorData: string;
    isLogin: boolean;
    refreshToken: string;
}

const initialState: IUserSlice = {
    isUserDataRequestSend: false,
    isUserDataRequestSuccess: false,
    isUserDataRequestError: false,
    userData: null,
    userToken: null,
    fetchErrorData: '',
    isLogin: false,
    refreshToken:""
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeLogin(state, action: PayloadAction<boolean>) {
            state.isLogin = action.payload;
        },

        setRefreshToken(state, action: PayloadAction<any>){
            state.refreshToken = action.payload;
        },

        setUserData(state, action: PayloadAction<any>){
            state.userData = action.payload;
        }
    },
});
export const { changeLogin, setRefreshToken, setUserData } = userSlice.actions

export default userSlice.reducer;
