import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IGood {
    name: string;
    goods: any
}

const initialState: IGood = {
    name: '',
    goods: []
};

export const goodSlice = createSlice({
    name: 'good',
    initialState,
    reducers: {
        changeLogin(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },

        setAllGoods(state, action: PayloadAction<any>) {
            state.goods = action.payload;
        }
    },
});

export const {setAllGoods} = goodSlice.actions;
export default goodSlice.reducer;
