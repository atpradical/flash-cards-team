import {
  LoginArgs,
  LoginResponse,
  SignUpArgs,
  SignUpResponse,
  User,
} from '@/services/auth/auth.types'
import { flashcardsApi } from '@/services/flashcards-api'

const formatSignUpData = (data: SignUpArgs) => {
  const { confirmPassword, ...rest } = data

  return rest
}

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
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          const { data } = await queryFulfilled

          if (!data) {
            return
          }

          localStorage.setItem('accessToken', data.accessToken)
          localStorage.setItem('refreshToken', data.refreshToken)

          dispatch(authApi.util.invalidateTags(['Me']))
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

      signUp: builder.mutation<SignUpResponse, SignUpArgs>({
        invalidatesTags: ['User', 'Me'],
        query: body => ({
          body: formatSignUpData(body),
          method: 'POST',
          url: '/v1/auth/sign-up',
        }),
      }),
    }
  },
  overrideExisting: false,
})

export const { useLogOutMutation, useLoginMutation, useMeQuery, useSignUpMutation } = authApi
