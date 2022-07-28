import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    "X-RapidAPI-Key": "685c455c07msh65fa798ada3c88ap1cb03djsn412321f24480"
}

const baseUrl = "https://coinranking1.p.rapidapi.com"

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest("/coins")
        })
    })
})

export const {
    useGetCryptosQuery
} = cryptoApi;