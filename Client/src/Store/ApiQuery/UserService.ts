import { fetchBaseQuery} from "@reduxjs/toolkit/query";
import { createApi } from '@reduxjs/toolkit/query/react'

interface PostData {
    email: string,
    password: string
}

interface PostResponse {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export const loginAPI= createApi({
    reducerPath: 'loginAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    endpoints: (build) =>({
        createLogin: build.mutation({
            query: (postData) => ({
                url: '/users/login',
                method: 'POST',
                body: {
                    email: postData.Email,
                    password: postData.Password
                }
            })
        })
    })
})

export const registerAPI = createApi({
    reducerPath: 'registerAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    endpoints: (build) =>({

    })
})
