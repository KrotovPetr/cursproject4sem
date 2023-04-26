import { api } from '../store';

export const ServiceAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        fetchAllService: builder.query<any, any>({
            query: () => ({
                url: '/services',
                method: 'GET',
            }),
        }),

    }),
});

export const {
    useFetchAllServiceQuery
} = ServiceAPI;
