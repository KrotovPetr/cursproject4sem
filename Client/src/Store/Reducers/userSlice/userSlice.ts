import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserSlice {
    isUserDataRequestSend: boolean;
    isUserDataRequestSuccess: boolean;
    isUserDataRequestError: boolean;
    userData: null | any;
    userToken: null | string;
    fetchErrorData: string;
    isLogin: boolean;
}

const initialState: IUserSlice = {
    isUserDataRequestSend: false,
    isUserDataRequestSuccess: false,
    isUserDataRequestError: false,
    userData: null,
    userToken: null,
    fetchErrorData: '',
    isLogin: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeLogin(state, action: PayloadAction<boolean>) {
            state.isLogin = action.payload;
        },
    },
});
export const { changeLogin } = userSlice.actions

export default userSlice.reducer;
