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
    })
});

export const {useRegisterUserMutation, useLoginUserMutation} = AuthAPI;
