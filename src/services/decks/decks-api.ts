import {
  CreateDeckArgs,
  CreateDeckResponse,
  DeckId,
  DecksListResponse,
  DeleteDeckResponse,
  GetDeckResponse,
  GetDecksArgs,
  UpdateDeckArgs,
  UpdateDeckResponse,
} from '@/services/decks/deck.types'
import { optimisticUpdate } from '@/services/decks/optimistic-update-decks'
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
        query: args => {
          const { cover, isPrivate, name } = args
          const formData = new FormData()

          formData.append('name', name)

          if (cover) {
            formData.append('cover', cover)
          }

          if (isPrivate) {
            formData.append('isPrivate', isPrivate.toString())
          }

          return {
            body: formData,
            method: 'POST',
            url: 'v1/decks',
          }
        },
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
      getDeck: builder.query<GetDeckResponse, DeckId>({
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
      getMinMax: builder.query<any, void>({
        keepUnusedDataFor: 1,
        query: () => ({
          method: 'GET',
          url: 'v2/decks/min-max-cards',
        }),
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
        onQueryStarted: optimisticUpdate,
        query: ({ cover, id, isPrivate, name }) => {
          const formData = new FormData()

          if (name) {
            formData.append('name', name)
          }

          if (cover) {
            formData.append('cover', cover)
          } else if (cover === null) {
            formData.append('cover', '')
          }

          if (isPrivate) {
            formData.append('isPrivate', isPrivate.toString())
          }

          return {
            body: formData,
            method: 'PATCH',
            url: `v1/decks/${id}`,
          }
        },
      }),
    }
  },
  overrideExisting: false,
})

export const {
  useAddDeckToFavoriteMutation,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckQuery,
  useGetDecksQuery,
  useGetMinMaxQuery,
  useRemoveDeckFromFavoriteMutation,
  useUpdateDeckMutation,
} = decksApi
