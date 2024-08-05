import {
  ConfirmEmailArgs,
  CreateUserArgs,
  CreateUserResponse,
  LoginArgs,
  LoginResponse,
  PWDRecoverArgs,
  PWDResetArgs,
  ResendVerificationEmailArgs,
  UpdateUserArgs,
  UpdateUserResponse,
  User,
} from '@/services/auth/auth.types'
import { performOptimisticUserUpdate } from '@/services/auth/utils/perform-optimistic-user-update'
import { flashcardsApi } from '@/services/flashcards-api'

import {
  emailConfirmationBodyHTML,
  emailConfirmationRequestSubjectHTML,
  pwdRecoverRequestBodyHTML,
  pwdRecoverRequestSubjectHTML,
} from './auth-templates'
import { createUserFormData } from './utils'

export const authApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      confirmEmail: builder.mutation<void, ConfirmEmailArgs>({
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/verify-email',
        }),
      }),
      createUser: builder.mutation<CreateUserResponse, CreateUserArgs>({
        query: args => {
          const { email, name, password } = args

          const sendConfirmationEmail = true

          return {
            body: { email, html: emailConfirmationBodyHTML, name, password, sendConfirmationEmail },
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
      pwdRecover: builder.mutation<void, PWDRecoverArgs>({
        query: body => ({
          body: {
            html: pwdRecoverRequestBodyHTML,
            subject: pwdRecoverRequestSubjectHTML,
            ...body,
          },
          method: 'POST',
          url: '/v1/auth/recover-password',
        }),
      }),
      pwdReset: builder.mutation<void, PWDResetArgs>({
        query: ({ token, ...body }) => ({
          body,
          method: 'POST',
          url: `/v1/auth/reset-password/${token}`,
        }),
      }),
      resendVerificationEmail: builder.mutation<void, ResendVerificationEmailArgs>({
        invalidatesTags: ['Me'],
        query: body => ({
          body: {
            html: emailConfirmationBodyHTML,
            subject: emailConfirmationRequestSubjectHTML,
            ...body,
          },
          method: 'POST',
          url: '/v1/auth/resend-verification-email',
        }),
      }),
      updateUser: builder.mutation<UpdateUserResponse, UpdateUserArgs>({
        invalidatesTags: ['Me'],
        async onQueryStarted(args, { dispatch, getState, queryFulfilled }) {
          const { patchUserResults } = performOptimisticUserUpdate({
            args,
            dispatch,
            getState,
          })

          try {
            await queryFulfilled
          } catch (e) {
            patchUserResults.forEach(patchResult => {
              patchResult.undo()
            })
          }
        },
        query: args => {
          const formData = createUserFormData(args)

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
  useConfirmEmailMutation,
  useCreateUserMutation,
  useDeleteUserMutation,
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  usePwdRecoverMutation,
  usePwdResetMutation,
  useResendVerificationEmailMutation,
  useUpdateUserMutation,
} = authApi
