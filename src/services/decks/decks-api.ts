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
import { changeDeckFavoriteStatus } from '@/services/utils'

export const decksApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      addDeckToFavorite: builder.mutation<void, DeckId>({
        invalidatesTags: ['Decks'],

        async onQueryStarted({ id }, { dispatch, getState, queryFulfilled }) {
          const patchDecksResults = changeDeckFavoriteStatus({
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
        async onQueryStarted({ id }, { dispatch, getState, queryFulfilled }) {
          const patchDecksResults = changeDeckFavoriteStatus({
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
        async onQueryStarted({ id, ...args }, { dispatch, getState, queryFulfilled }) {
          const cachedDecksArgsForQuery = decksApi.util.selectCachedArgsForQuery(
            getState(),
            'getDecks'
          )
          // todo: check if need to be typed (any)
          const patchDecksResults: any[] = []
          const coverImg = args.cover && URL.createObjectURL(args.cover)

          cachedDecksArgsForQuery.forEach(cachedArgs => {
            patchDecksResults.push(
              dispatch(
                decksApi.util.updateQueryData('getDecks', cachedArgs, draft => {
                  const itemToUpdateIndex = draft.items.findIndex(deck => deck.id === id)

                  if (itemToUpdateIndex === -1) {
                    return
                  }

                  draft.items[itemToUpdateIndex] = {
                    ...draft.items[itemToUpdateIndex],
                    ...args,
                    cover: coverImg !== undefined ? coverImg : draft.items[itemToUpdateIndex].cover,
                  }
                })
              )
            )
          })

          // check if deck with relevant id exist in cache, if true update it as well
          const cachedDeck = decksApi.endpoints.getDeck.select({ id })(getState())
          // todo: check if need to be typed (any)
          let patchDeckResult: any = null

          if (cachedDeck.data) {
            patchDeckResult = dispatch(
              decksApi.util.updateQueryData('getDeck', { id }, draft => {
                Object.assign(draft, {
                  ...draft,
                  ...args,
                  cover: coverImg !== undefined ? coverImg : draft.cover,
                })
              })
            )
          }

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
