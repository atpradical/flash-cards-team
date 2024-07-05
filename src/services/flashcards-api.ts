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
        getCard: builder.query<Card, GetCardArgs>({
            query: ({ id }) => `v1/cards/${id}`,
        }),
    }
  },
  reducerPath: 'flashcardsApi',
})

export const { useGetCardsQuery, useGetCardQuery } = flashcardsApi
