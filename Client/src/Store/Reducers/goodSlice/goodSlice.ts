import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IGood {
    name: string;
}

const initialState: IGood = {
    name: '',
};

export const goodSlice = createSlice({
    name: 'good',
    initialState,
    reducers: {
        changeLogin(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
    },
});

export default goodSlice.reducer;
