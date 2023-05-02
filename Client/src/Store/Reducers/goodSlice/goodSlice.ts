import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IGood {
    name: string;
    goods: any,
    currentCart: any,
    totalPrice: number,
    order: any
}

const initialState: IGood = {
    name: '',
    goods: [],
    currentCart: [],
    totalPrice: 0,
    order: 0
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
        },

        deleteFromCurrentCart(state, action: PayloadAction<any>){
            state.currentCart = action.payload.newCart;
            state.totalPrice = action.payload.newPrice;
        },

        setOrderList(state, action: PayloadAction<any>){
            state.order = state.order + action.payload;
        }
    },
});

export const {setAllGoods, addGoodToCart, deleteFromCurrentCart, setOrderList} = goodSlice.actions;
export default goodSlice.reducer;
