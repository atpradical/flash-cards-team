import { configureStore } from '@reduxjs/toolkit'
import { flashcardsApi } from '@/services/flashcards-api'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [flashcardsApi.reducerPath]: flashcardsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(flashcardsApi.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
