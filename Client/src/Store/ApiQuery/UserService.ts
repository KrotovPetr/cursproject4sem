import { api } from '../store';

export const AuthAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation<any, any>({
            query: (params) => ({
                url: '/users/registration',
                method: 'POST',
                body: {
                    email: params.Email,
                    password: params.Password,
                },
            }),
        }),
        loginUser: builder.mutation<any, any>({
            query: (params) => ({
                url: '/users/login',
                method: 'POST',
                body: {
                    email: params.Email,
                    password: params.Password,
                },
            }),
            invalidatesTags: ['User']
        }),
        resetUserPassword: builder.mutation<any, any>({
            query: (params) => ({
                url: '/users/reset-password',
                method: 'POST',
                body: {
                    email: params.Email,
                },
            }),
            invalidatesTags: ['User']
        }),
        setNewPassword: builder.mutation<any, any>({
            query: (params) => ({
                url: '/users/new-password',
                method: 'PATCH',
                body: {
                    link: params.link,
                    password: params.password,
                },
            }),
            invalidatesTags: ['User']
        }),
        changeUserBan: builder.mutation<any, any>({
            query: (params) => ({
                url: '/users/ban',
                method: 'PATCH',
                body: {
                    email: params.email,
                    isBanned: params.isBanned,
                },
            }),
            invalidatesTags: ['User']
        }),
        verifyUserLogin: builder.query<any, any>({
            query: (refreshToken) => `/users/refresh?refreshToken=${refreshToken}`,
            providesTags: result => ['User']
        }),
        fetchAllUsers: builder.query<any, any>({
            query: (params) => ({
                url: '/users',
                method: 'GET',
            }),
            providesTags: result => ['User']
        })
    }),
});

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useResetUserPasswordMutation,
    useSetNewPasswordMutation,
    useLazyVerifyUserLoginQuery,
    useFetchAllUsersQuery,
    useChangeUserBanMutation
} = AuthAPI;
