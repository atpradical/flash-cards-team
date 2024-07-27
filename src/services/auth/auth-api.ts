import {
  CreateUserArgs,
  CreateUserResponse,
  LoginArgs,
  LoginResponse,
  User,
} from '@/services/auth/auth.types'
import { flashcardsApi } from '@/services/flashcards-api'

import { createUserHTML } from './auth-templates'

export const authApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      createUser: builder.mutation<CreateUserResponse, CreateUserArgs>({
        query: args => {
          const { email, name, password } = args

          const sendConfirmationEmail = true

          return {
            body: { email, html: createUserHTML, name, password, sendConfirmationEmail },
            method: 'POST',
            url: '/v1/auth/sign-up',
          }
        },
      }),
      login: builder.mutation<LoginResponse, LoginArgs>({
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          const { data } = await queryFulfilled

          localStorage.setItem('accessToken', data.accessToken.trim())
          localStorage.setItem('refreshToken', data.refreshToken.trim())

          dispatch(authApi.util.invalidateTags(['Me']))
        },
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      logout: builder.mutation<void, void>({
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          await queryFulfilled

          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')

          dispatch(authApi.util.invalidateTags(['Me']))
        },
        query: () => ({
          method: 'POST',
          url: '/v2/auth/logout',
        }),
      }),
      me: builder.query<User, void>({
        providesTags: ['Me'],
        query: () => `v1/auth/me`,
      }),
    }
  },
  overrideExisting: false,
})

export const { useCreateUserMutation, useLoginMutation, useLogoutMutation, useMeQuery } = authApi
