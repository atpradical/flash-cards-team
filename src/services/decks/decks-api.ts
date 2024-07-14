import {
  CreateDeckArgs,
  CreateDeckResponse,
  DeckId,
  DeckResponse,
  DecksListResponse,
  DeleteDeckResponse,
  GetDecksArgs,
  UpdateDeckArgs,
  UpdateDeckResponse,
} from '@/services/decks/deck.types'
import { flashcardsApi } from '@/services/flashcards-api'

export const decksApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      addDeckToFavorite: builder.mutation<void, DeckId>({
        invalidatesTags: ['Decks'],
        query: ({ id }) => ({
          method: 'POST',
          url: `v1/decks/${id}/favorite`,
        }),
      }),
      createDeck: builder.mutation<CreateDeckResponse, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => ({
          body: args,
          method: 'POST',
          url: 'v1/decks',
        }),
      }),
      deleteDeck: builder.mutation<DeleteDeckResponse, DeckId>({
        invalidatesTags: ['Decks'],
        query: ({ id }) => {
          return {
            method: 'DELETE',
            url: `/v1/decks/${id}`,
          }
        },
      }),
      getDeck: builder.query<DeckResponse, DeckId>({
        providesTags: ['Deck'],
        query: ({ id }) => {
          return {
            method: 'GET',
            url: `v1/decks/${id}`,
          }
        },
      }),
      getDecks: builder.query<DecksListResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => {
          return {
            method: 'GET',
            params: args ?? undefined,
            url: `v2/decks`,
          }
        },
      }),
      removeDeckFromFavorite: builder.mutation<void, DeckId>({
        invalidatesTags: ['Decks'],
        query: ({ id }) => ({
          method: 'DELETE',
          url: `v1/decks/${id}/favorite`,
        }),
      }),
      updateDeck: builder.mutation<UpdateDeckResponse, UpdateDeckArgs>({
        invalidatesTags: ['Decks', 'Deck'],
        query: ({ id, ...body }) => ({
          body,
          method: 'PATCH',
          url: `v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useAddDeckToFavoriteMutation,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckQuery,
  useGetDecksQuery,
  useRemoveDeckFromFavoriteMutation,
  useUpdateDeckMutation,
} = decksApi
