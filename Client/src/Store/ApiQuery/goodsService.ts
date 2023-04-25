import { api } from '../store';

export const GoodAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        fetchAllGoods: builder.query<any, any>({
            query: () => ({
                url: '/goods',
                method: 'GET',
            }),
        }),

    }),
});

export const {
    useFetchAllGoodsQuery
} = GoodAPI;
