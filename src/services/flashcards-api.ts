import { baseQueryWithReauth } from '@/services/flashcards-base-query'
import { createApi } from '@reduxjs/toolkit/query/react'

export const flashcardsApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'flashcardsApi',
  tagTypes: ['Cards', 'Decks', 'Deck', 'Me'],
})
