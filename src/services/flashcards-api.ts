import { CardsListResponse, CardsMinMaxResponse, GetCardsArgs } from '@/services/cards/cards.types'
import { DecksListResponse, GetDecksArgs } from '@/services/decks/deck.types'
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
      getCards: builder.query<CardsListResponse, GetCardsArgs>({
        query: ({ id, ...args }) => ({
          method: 'GET',
          params: args ?? undefined,
          url: `v1/decks/${id}/cards`,
        }),
      }),
      getDecks: builder.query<DecksListResponse, GetDecksArgs | void>({
        query: args => {
          return {
            method: 'GET',
            params: args ?? undefined,
            url: `v2/decks`,
          }
        },
      }),
      getMinMaxCards: builder.query<CardsMinMaxResponse, void>({
        query: () => ({
          method: 'GET',
          url: `v2/decks/min-max-cards`,
        }),
      }),
    }
  },
  reducerPath: 'flashcardsApi',
})

export const { useGetCardsQuery, useGetDecksQuery, useGetMinMaxCardsQuery } = flashcardsApi
