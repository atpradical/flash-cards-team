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
import { flashcardsApi } from '@/services/flashcards-api'

import {
  createFormData,
  performOptimisticDeckUpdate,
  performOptimisticFavoriteStatusUpdate,
} from './utils'

export const decksApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      addDeckToFavorite: builder.mutation<void, DeckId>({
        invalidatesTags: ['Decks'],
        async onQueryStarted({ id }, { dispatch, getState, queryFulfilled }) {
          const patchDecksResults = performOptimisticFavoriteStatusUpdate({
            dispatch,
            getState,
            id,
            isFavorite: true,
          })

          try {
            await queryFulfilled
          } catch (e) {
            patchDecksResults.forEach(patchResult => {
              patchResult.undo()
            })
          }
        },
        query: ({ id }) => ({
          method: 'POST',
          url: `v1/decks/${id}/favorite`,
        }),
      }),
      createDeck: builder.mutation<CreateDeckResponse, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => {
          const formData = createFormData(args)

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
        async onQueryStarted({ id }, { dispatch, getState, queryFulfilled }) {
          const patchDecksResults = performOptimisticFavoriteStatusUpdate({
            dispatch,
            getState,
            id,
            isFavorite: false,
          })

          try {
            await queryFulfilled
          } catch (e) {
            patchDecksResults.forEach(patchResult => {
              patchResult.undo()
            })
          }
        },

        query: ({ id }) => ({
          method: 'DELETE',
          url: `v1/decks/${id}/favorite`,
        }),
      }),
      updateDeck: builder.mutation<UpdateDeckResponse, UpdateDeckArgs>({
        invalidatesTags: ['Decks', 'Deck'],
        async onQueryStarted(args, { dispatch, getState, queryFulfilled }) {
          const { coverImg, patchDeckResult, patchDecksResults } = performOptimisticDeckUpdate({
            args,
            dispatch,
            getState,
          })

          try {
            await queryFulfilled

            if (coverImg) {
              URL.revokeObjectURL(coverImg)
            }
          } catch (e) {
            patchDecksResults.forEach(patchResult => {
              patchResult.undo()
            })
            if (patchDeckResult) {
              patchDeckResult.undo()
            }
          }
        },

        query: ({ id, ...args }) => {
          const formData = createFormData(args)

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
