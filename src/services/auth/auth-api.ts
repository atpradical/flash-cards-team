import { LoginArgs, LoginResponse, User } from '@/services/auth/auth.types'
import { flashcardsApi } from '@/services/flashcards-api'

export const authApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      logOut: builder.mutation<void, void>({
        invalidatesTags: ['Me'],
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          try {
            await queryFulfilled
          } finally {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            dispatch(authApi.util.invalidateTags(['Me', 'User']))
          }
        },

        query: () => ({
          method: 'POST',
          url: `/v2/auth/logout`,
        }),
      }),
      login: builder.mutation<LoginResponse, LoginArgs>({
        invalidatesTags: ['Me'],
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

export const { useLogOutMutation, useLoginMutation, useMeQuery } = authApi
