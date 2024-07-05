import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetDecksArgs, ResponseDecksList } from '@/services/decks/deck.types'
import { CardsListResponse, GetCardsArgs } from './cards/cards.types'

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
      getCards: builder.query<CardsListResponse, GetCardsArgs>({
        query: ({ id, ...args }) => ({
          method: 'GET',
          params: args ?? undefined,
          url: `v1/decks/${id}/cards`,
        }),
      }),
    }
  },
})

export const { useGetDecksQuery, useGetCardsQuery } = flashcardsApi
