import { toast } from 'react-toastify'

import { AppDispatch, RootState } from '@/services'

import { CreateUserArgs, CreateUserResponse } from './auth.types'
import { authApi } from './auth-api'

type PessimisticUpdateContext = {
  dispatch: AppDispatch
  getState: () => RootState
  queryFulfilled: Promise<{ data: CreateUserResponse }>
}

export async function pessimisticUpdateAuth(
  _: CreateUserArgs,
  { dispatch, getState, queryFulfilled }: PessimisticUpdateContext
) {
  const cachedArgsForQuery = authApi.util.selectCachedArgsForQuery(getState(), 'me')

  try {
    const { data } = await queryFulfilled

    console.log('data', data)
    cachedArgsForQuery.forEach(cachedArgs => {
      dispatch(
        authApi.util.updateQueryData('me', cachedArgs, draft => {
          return {
            ...draft,
            avatar: data.avatar,
            email: data.email,
            name: data.name,
          }
        })
      )
    })
  } catch (e: any) {
    toast.error(e.error.error as string)
  }
}
