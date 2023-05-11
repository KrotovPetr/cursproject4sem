import {addGoodToCart, changeURL, clearCart, goodSlice} from "./goodSlice";
import {changeLogin} from "../userSlice/userSlice";

interface IGood {
    name: string;
    goods: any,
    currentCart: any,
    totalPrice: number,
    order: any,
    url: string
}

const initialState: IGood = {
    name: '',
    goods: [],
    currentCart: [],
    totalPrice: 0,
    order: 0,
    url: ""
};

describe('goods reducer tests', () => {
    it('should check initial state', () => {
        expect(goodSlice.reducer(undefined, { type: 'unknown' })).toEqual({
            name: '',
            goods: [],
            currentCart: [],
            totalPrice: 0,
            order: 0,
            url: ""
        });
    });


    it('should change login', () => {
        expect(
            goodSlice.reducer(initialState, {
                type: changeLogin,
                payload: 'hello',
            })
        ).toEqual({
            name: "",
            goods: [],
            currentCart: [],
            totalPrice: 0,
            order: 0,
            url: ""
        });
    });


    it('should set all goods from fetch', () => {
        expect(
            goodSlice.reducer(initialState, {
                type: changeLogin,
                payload: ["Товар 1", "Товар 2"],
            })
        ).toEqual({
            name: '',
            goods:  [],
            currentCart: [],
            totalPrice: 0,
            order: 0,
            url: ""
        });
    });

    it('should add all goods to cart', () => {
        expect(
            goodSlice.reducer(initialState, {
                type: addGoodToCart,
                payload: {price:1,data:"Товар 1"},
            })
        ).toEqual({
            name: '',
            goods:  [],
            currentCart: [{price:1,data:"Товар 1"}],
            totalPrice: 1,
            order: 0,
            url: ""
        });
    });

    it('should make something good', () => {
        expect(
            goodSlice.reducer(initialState, {
                type: clearCart,
            })
        ).toEqual({
            name: '',
            goods:  [],
            currentCart: [],
            totalPrice: 0,
            order: 0,
            url: ""
        });
    });

    it('should make something good', () => {
        expect(
            goodSlice.reducer(initialState, {
                type: changeURL,
                payload: "hello"
            })
        ).toEqual({
            name: '',
            goods:  [],
            currentCart: [],
            totalPrice: 0,
            order: 0,
            url: "hello"
        });
    });

});

export {};