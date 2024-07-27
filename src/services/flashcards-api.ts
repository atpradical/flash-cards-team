import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from './flashCardsBaseQuery'

export const flashcardsApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'flashcardsApi',
  tagTypes: ['Cards', 'Decks', 'Deck', 'Me', 'User'],
})

export const {} = flashcardsApi
