import {
  CreateUserArgs,
  CreateUserResponse,
  LoginArgs,
  LoginResponse,
  UpdateUserArgs,
  UpdateUserResponse,
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
      deleteUser: builder.mutation<void, void>({
        invalidatesTags: ['Me'],
        query: () => ({
          method: 'DELETE',
          url: `/v1/auth/me`,
        }),
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
      updateUser: builder.mutation<UpdateUserResponse, UpdateUserArgs>({
        invalidatesTags: ['Me'],
        query: args => {
          const { avatar, name } = args
          const formData = new FormData()

          if (name) {
            formData.append('name', name)
          }

          if (avatar) {
            formData.append('avatar', avatar)
          } else if (avatar === null) {
            formData.append('avatar', '')
          }

          return {
            body: formData,
            method: 'PATCH',
            url: '/v1/auth/me',
          }
        },
      }),
    }
  },
  overrideExisting: false,
})

export const {
  useCreateUserMutation,
  useDeleteUserMutation,
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useUpdateUserMutation,
} = authApi
