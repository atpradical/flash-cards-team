import { LoginArgs, LoginResponse, User } from '@/services/auth/auth.types'
import { flashcardsApi } from '@/services/flashcards-api'

export const authApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponse, LoginArgs>({
        async onQueryStarted(_, { queryFulfilled }) {
          const { data } = await queryFulfilled

          if (!data) {
            return
          }

          localStorage.setItem('accessToken', data.accessToken)
          localStorage.setItem('refreshToken', data.refreshToken)
        },
        query: body => ({
          body,
          method: 'POST',
          url: `v1/auth/login`,
        }),
      }),
      me: builder.query<User, void>({
        // providesTags: ['Me'],
        query: () => ({
          method: 'GET',
          url: `v1/auth/me`,
        }),
      }),
    }
  },
  overrideExisting: false,
})

export const { useLoginMutation, useMeQuery } = authApi
