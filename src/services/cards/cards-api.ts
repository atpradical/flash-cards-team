import { optimisticUpdateCards } from '@/services/cards'
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
        query: ({ answer, answerImg, deckId, question, questionImg }) => {
          const formData = new FormData()

          if (answer) {
            formData.append('answer', answer)
          }
          if (answerImg) {
            formData.append('answerImg', answerImg)
          }
          if (question) {
            formData.append('question', question)
          }
          if (questionImg) {
            formData.append('questionImg', questionImg)
          }

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
        onQueryStarted: optimisticUpdateCards,
        query: ({ answer, answerImg, id, question, questionImg }) => {
          const formData = new FormData()

          if (answer) {
            formData.append('answer', answer)
          }
          if (answerImg) {
            formData.append('answerImg', answerImg)
          } else if (answerImg === null) {
            formData.append('answerImg', '')
          }
          if (question) {
            formData.append('question', question)
          }
          if (questionImg) {
            formData.append('questionImg', questionImg)
          } else if (questionImg === null) {
            formData.append('questionImg', '')
          }

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
