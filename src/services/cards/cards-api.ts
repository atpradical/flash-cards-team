import {
  Card,
  CardId,
  CardsListResponse,
  CreateCardArgs,
  CreateCardResponse,
  GetCardArgs,
  GetCardsArgs,
  GetRandomCardToLearnArgs,
  GetRandomCardToLearnResponse,
  SaveGradeArgs,
  UpdateCardArgs,
  UpdateCardResponse,
} from '@/services/cards/cards.types'
import { performOptimisticCardUpdate } from '@/services/cards/utils'
import { createCardsFormData } from '@/services/cards/utils/create-cards-form-data'
import { flashcardsApi } from '@/services/flashcards-api'
import { revokeImageUrl } from '@/shared/utils'

export const cardsApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<CreateCardResponse, CreateCardArgs>({
        invalidatesTags: ['Cards'],
        async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
          const cachedArgsForQuery = cardsApi.util.selectCachedArgsForQuery(
            getState(),
            'getCards'
          ) as GetCardsArgs[]

          try {
            const { data } = await queryFulfilled

            cachedArgsForQuery.forEach(cachedArgs => {
              dispatch(
                cardsApi.util.updateQueryData('getCards', cachedArgs, draft => {
                  if (cachedArgs.currentPage !== 1) {
                    return
                  }
                  draft.items.unshift(data)
                  draft.items.pop()
                })
              )
            })
          } catch (e) {
            console.warn(JSON.stringify(e))
          }
        },
        query: ({ deckId, ...args }) => {
          const formData = createCardsFormData(args)

          return {
            body: formData,
            method: 'POST',
            url: `v1/decks/${deckId}/cards`,
          }
        },
      }),
      deleteCard: builder.mutation<void, CardId>({
        invalidatesTags: ['Cards'],
        query: ({ id }) => ({
          method: 'DELETE',
          url: `v1/cards/${id}`,
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
      getRandomCard: builder.query<GetRandomCardToLearnResponse, GetRandomCardToLearnArgs>({
        query: ({ id, ...args }) => {
          return {
            method: 'GET',
            params: args ?? undefined,
            url: `/v1/decks/${id}/learn`,
          }
        },
      }),
      saveGradeOfCard: builder.mutation<Card, SaveGradeArgs>({
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            const res = await queryFulfilled

            if (res.data) {
              dispatch(
                cardsApi.util.updateQueryData('getRandomCard', { id: args.id }, draft => {
                  Object.assign(draft, res.data)
                })
              )
            }
          } catch (e) {
            console.warn(e)
          }
        },
        query: ({ id, ...body }) => {
          return {
            body,
            method: 'POST',
            url: `/v1/decks/${id}/learn`,
          }
        },
      }),
      updateCard: builder.mutation<UpdateCardResponse, UpdateCardArgs>({
        invalidatesTags: ['Cards'],
        async onQueryStarted(args, { dispatch, getState, queryFulfilled }) {
          const { answerImg, patchCardsResults, questionImg } = performOptimisticCardUpdate({
            args,
            dispatch,
            getState,
          })

          try {
            await queryFulfilled
            revokeImageUrl(answerImg)
            revokeImageUrl(questionImg)
          } catch (e) {
            patchCardsResults.forEach(patchResult => {
              patchResult.undo()
            })
          }
        },
        query: ({ id, ...args }) => {
          const formData = createCardsFormData(args)

          return {
            body: formData,
            method: 'PATCH',
            url: `/v1/cards/${id}`,
          }
        },
      }),
    }
  },
  overrideExisting: false,
})

export const {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardsQuery,
  useGetRandomCardQuery,
  useSaveGradeOfCardMutation,
  useUpdateCardMutation,
} = cardsApi
