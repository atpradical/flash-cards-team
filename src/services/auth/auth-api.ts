import { User } from '@/services/auth/auth.types'
import { flashcardsApi } from '@/services/flashcards-api'

export const authApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      me: builder.query<User, void>({
        providesTags: ['Me'],
        query: () => ({
          method: 'GET',
          url: `v1/auth/me`,
        }),
      }),
    }
  },
  overrideExisting: false,
})

export const { useMeQuery } = authApi
