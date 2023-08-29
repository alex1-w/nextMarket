// import axios from 'axios'

// export const api = axios.create({
//     baseURL: 'http://localhost:5000/api',
//     withCredentials: true
// })

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({

    reducerPath: 'api',
    refetchOnFocus: false,

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api'
    }),

    endpoints: (build) => ({

        registration: build.mutation({
            query: body => (
                {
                    url: '/user/registration',
                    method: 'POST',
                    body,
                })
        }),

        login: build.mutation({
            query: body => (
                {
                    url: '/user/authentication',
                    method: 'POST',
                    body,
                })
        }),

        createBrand: build.mutation({
            query: body => (
                {
                    url: '/brand',
                    method: 'POST',
                    body,
                }
            )
        })

    })
})

export const { useRegistrationMutation, useLoginMutation, useCreateBrandMutation } = api 