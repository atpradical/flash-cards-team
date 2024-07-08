import {
  Card,
  CardsListResponse,
  CreateCardArgs,
  CreateCardResponse,
  GetCardArgs,
  GetCardsArgs,
} from '@/services/cards/cards.types'
import { DeckResponse, DecksListResponse, GetDecksArgs } from '@/services/decks/deck.types'
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
      createCard: builder.mutation<CreateCardResponse, CreateCardArgs>({
        invalidatesTags: ['Cards'],
        query: ({ deckId, ...args }) => ({
          body: args,
          method: 'POST',
          url: `v1/decks/${deckId}/cards`,
        }),
      }),
      getCard: builder.query<Card, GetCardArgs>({
        query: ({ id }) => ({
          method: 'GET',
          url: `v1/cards/${id}`,
        }),
      }),
      getCards: builder.query<CardsListResponse, GetCardsArgs>({
        providesTags: ['Cards'],
        query: ({ deckId, ...args }) => ({
          method: 'GET',
          params: args ?? undefined,
          url: `v1/decks/${deckId}/cards`,
        }),
      }),
      getDeck: builder.query<DeckResponse, { id: string }>({
        query: ({ id }) => {
          return {
            method: 'GET',
            url: `v1/decks/${id}`,
          }
        },
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
    }
  },
  reducerPath: 'flashcardsApi',
  tagTypes: ['Cards'],
})

export const {
  useCreateCardMutation,
  useGetCardQuery,
  useGetCardsQuery,
  useGetDeckQuery,
  useGetDecksQuery,
} = flashcardsApi
