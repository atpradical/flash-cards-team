import { Card } from '@/services/cards/cards.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const flashcardsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      getCard: builder.query<Card, { id: string }>({
        query: () => `v1/cards/{id}`,
      }),
    }
  },
  reducerPath: 'flashcardsApi',
})

export const { useGetCardQuery } = flashcardsApi
