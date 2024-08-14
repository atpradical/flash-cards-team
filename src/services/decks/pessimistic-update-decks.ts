import { toast } from 'react-toastify'

import { AppDispatch, RootState } from '@/services'

import { CreateDeckArgs, Deck, GetDecksArgs } from './deck.types'
import { decksApi } from './decks-api'

type PessimisticUpdateContext = {
  dispatch: AppDispatch
  getState: () => RootState
  queryFulfilled: Promise<{ data: Deck }>
}

export async function pessimisticUpdateDecks(
  _: CreateDeckArgs,
  { dispatch, getState, queryFulfilled }: PessimisticUpdateContext
) {
  const cachedArgsForQuery = decksApi.util.selectCachedArgsForQuery(
    getState(),
    'getDecks'
  ) as GetDecksArgs[]

  try {
    const { data } = await queryFulfilled

    cachedArgsForQuery.forEach(cachedArgs => {
      dispatch(
        decksApi.util.updateQueryData('getDecks', cachedArgs, draft => {
          if (cachedArgs.currentPage !== 1) {
            return
          }

          draft.items.unshift(data)
          draft.items.pop()
        })
      )
    })
  } catch (e: any) {
    toast.error(e.error.error as string)
  }
}
