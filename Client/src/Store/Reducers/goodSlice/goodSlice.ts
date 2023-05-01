import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IGood {
    name: string;
    goods: any,
    currentCart: any,
    totalPrice: number
}

const initialState: IGood = {
    name: '',
    goods: [],
    currentCart: [],
    totalPrice: 0
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
        },

        addGoodToCart(state, action: PayloadAction<any>){
            state.currentCart = [...state.currentCart, action.payload];
            state.totalPrice = state.totalPrice + action.payload.price;
        }
    },
});

export const {setAllGoods, addGoodToCart} = goodSlice.actions;
export default goodSlice.reducer;
