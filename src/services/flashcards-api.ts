import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetDecksArgs, ResponseDecksList } from '@/services/decks/deck.types'

export const flashcardsApi = createApi({
  reducerPath: 'flashcardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      getDecks: builder.query<ResponseDecksList, GetDecksArgs | void>({
        query: args => {
          return {
            method: 'GET',
            url: `v2/decks`,
            params: args ?? undefined,
          }
        },
      }),
    }
  },
})

export const { useGetDecksQuery } = flashcardsApi
