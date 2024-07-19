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
import { flashcardsApi } from '@/services/flashcards-api'

export const cardsApi = flashcardsApi.injectEndpoints({
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
        invalidatesTags: ['Cards'],
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
        query: ({ id, ...body }) => ({
          body,
          method: 'PATCH',
          url: `/v1/cards/${id}`,
        }),
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
