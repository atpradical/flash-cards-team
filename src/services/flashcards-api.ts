import { CardsListResponse, CardsMinMaxResponse, GetCardsArgs } from '@/services/cards/cards.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const flashcardsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    // todo: delete after authorization implementation
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
      getMinMaxCards: builder.query<CardsMinMaxResponse, void>({
        query: () => ({
          method: 'GET',
          url: `v1/decks/min-max-cards`,
        }),
      }),
    }
  },
  reducerPath: 'flashcardsApi',
})

export const { useGetCardsQuery, useGetMinMaxCardsQuery } = flashcardsApi
