import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { PORT } from '../../assets/constants/data'

const baseQuery = fetchBaseQuery({
    baseUrl: `http://localhost:${PORT}`,
    credentials: 'include',
    prepareHeaders: (headers, { getState}) =>{
        const token = getState().auth.token

        token && headers.set('authorization', `Bearer ${token}`)

        return headers
    }
})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Chats'],
    endpoints: builder => ({})
})