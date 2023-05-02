import { api } from '../store';

export const OrderAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        fetchAllCurrentOrders: builder.query<any, any>({
            query: (userId) => `/orders/current?idUser=${userId}`,
            providesTags: result => ['order']
        }),
        fetchAllOrders: builder.query<any, any>({
            query: () =>({
                url: `/orders/all`,
                method: 'GET',
            }) ,

            providesTags: result => ['order']
        }),
        createNewOrder: builder.mutation<any, any>({
            query: (params) => ({
                url: '/orders',
                method: 'POST',
                body: {
                    date: params.date,
                    status: params.status,
                    price: params.price,
                    type: params.type,
                    productsIds: params.productsIds,
                    idUser: params.idUser
                },
                invalidatesTags: ['order']
            })
        }),
        updateOrder: builder.mutation<any, any>({
            query: (params) => ({
                url: '/orders/status',
                method: 'PATCH',
                body: {
                   status: params.status,
                   idOrders: params.idOrders
                },
                transformResponse: (response: any, data: any) => data,
                invalidatesTags: ['order']
            })
        })
    }),
});

export const {
    useFetchAllCurrentOrdersQuery,
    useFetchAllOrdersQuery,
    useCreateNewOrderMutation,
    useUpdateOrderMutation
} = OrderAPI;
