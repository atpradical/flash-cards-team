import { toast } from 'react-toastify'

import { AppDispatch, RootState } from '@/services'

import { CreateCardArgs, CreateCardResponse, GetCardsArgs } from './cards.types'
import { cardsApi } from './cards-api'

type PessimisticUpdateContext = {
  dispatch: AppDispatch
  getState: () => RootState
  queryFulfilled: Promise<{ data: CreateCardResponse }>
}

export async function pessimisticUpdateCards(
  _: CreateCardArgs,
  { dispatch, getState, queryFulfilled }: PessimisticUpdateContext
) {
  const cachedArgsForQuery = cardsApi.util.selectCachedArgsForQuery(
    getState(),
    'getCards'
  ) as GetCardsArgs[]

  try {
    const { data } = await queryFulfilled

    cachedArgsForQuery.forEach(cachedArgs => {
      dispatch(
        cardsApi.util.updateQueryData('getCards', cachedArgs, draft => {
          draft.items.unshift(data)
          draft.items.pop()
        })
      )
    })
  } catch (e: any) {
    toast.error(e.error.error as string)
  }
}
