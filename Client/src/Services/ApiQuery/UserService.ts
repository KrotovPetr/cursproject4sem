import { fetchBaseQuery} from "@reduxjs/toolkit/query";
import { createApi } from '@reduxjs/toolkit/query/react'

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/todos'}),
    endpoints: (build) =>({
        fetchUserData: build.query({
            query: () => ({
                url: '/1'
            })
        })
    })
})