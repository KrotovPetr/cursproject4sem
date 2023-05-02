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
        }),
        resetUserPassword: builder.mutation<any, any>({
            query: (params) => ({
                url: '/users/reset-password',
                method: 'POST',
                body: {
                    email: params.Email,
                },
            }),
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
        }),
        verifyUserLogin: builder.mutation<any, any>({
            query: (params) => ({
                url: '/users/verify',
                method: 'POST',
                body: {
                    refreshToken: params.refreshToken
                }
            })
        }),
        fetchAllUsers: builder.query<any, any>({
            query: (params) => ({
                url: '/users',
                method: 'GET',
            })
        })
    }),
});

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useResetUserPasswordMutation,
    useSetNewPasswordMutation,
    useVerifyUserLoginMutation,
    useFetchAllUsersQuery
} = AuthAPI;
