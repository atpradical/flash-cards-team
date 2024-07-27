import { flashcardsApi } from '@/services/flashcards-api'

import { UserArgs } from './user.types'

export const userApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      createUser: builder.mutation<{}, UserArgs>({
        invalidatesTags: ['User'],
        query: body => ({
          body,
          method: 'POST',
          url: `v1/users`,
        }),
      }),
    }
  },
  overrideExisting: false,
})

export const { useCreateUserMutation } = userApi
