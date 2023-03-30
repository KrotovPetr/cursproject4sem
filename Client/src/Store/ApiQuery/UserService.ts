import {api} from "../store";


export const AuthAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation<any, any>({
            query: (params) => ({
                url: "/users/registration",
                method: 'POST',
                body: {
                    email: params.Email,
                    password: params.Password
                }
            })
        }),
        loginUser: builder.mutation<any, any>({
            query: (params) => ({
                url: '/users/login',
                method: 'POST',
                body: {
                    email: params.Email,
                    password: params.Password
                }
            })
        }),
        resetUserPassword: builder.mutation<any, any>({
            query: (params) => ({
                url: '/users/reset-password',
                method: 'POST',
                body: {
                    email: params.Email,
                }
            })
        }),
        setNewPassword: builder.mutation<any, any>({
            query: (params) => ({
                url: '/users/new-password',
                method: 'PATCH',
                body: {
                    link: params.link,
                    password: params.password
                }
            })
        }),
    })
});

export const {useRegisterUserMutation, useLoginUserMutation, useResetUserPasswordMutation, useSetNewPasswordMutation} = AuthAPI;
