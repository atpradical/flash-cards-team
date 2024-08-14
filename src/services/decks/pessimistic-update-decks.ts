import { toast } from 'react-toastify'

import { router } from '@/app'
import { AppDispatch, CreateDeckArgs, Deck, GetDecksArgs, RootState, decksApi } from '@/services'
import { PATH } from '@/shared/enums'

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

  console.log('pessimisticUpdateDecks')
  try {
    const { data } = await queryFulfilled

    console.log('data', data)

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

    router.navigate(`${PATH.DECK_LIST}?currentPage=1`)
  } catch (e: any) {
    toast.error(e.error.error as string)
  }
}
