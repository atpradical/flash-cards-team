import { Nullable } from '@/shared/types/common'

import { AppDispatch, RootState } from '../store'
import { UpdateDeckArgs } from './deck.types'
import { decksApi } from './decks-api'

type OptimisticUpdateContext = {
  dispatch: AppDispatch
  getState: () => RootState
  queryFulfilled: Promise<any>
}

export async function optimisticUpdate(
  { cover, id, ...args }: UpdateDeckArgs,
  { dispatch, getState, queryFulfilled }: OptimisticUpdateContext
) {
  const cachedArgsForQuery = decksApi.util.selectCachedArgsForQuery(getState(), 'getDecks')
  const patchResults: any[] = []

  let uploadedImageUrl: Nullable<string | undefined>

  if (cover === null) {
    uploadedImageUrl = null
  } else if (cover && cover instanceof File) {
    uploadedImageUrl = URL.createObjectURL(cover)
  }

  cachedArgsForQuery.forEach(cachedArgs => {
    patchResults.push(
      dispatch(
        decksApi.util.updateQueryData('getDecks', cachedArgs, draft => {
          const itemToUpdateIndex = draft.items.findIndex(deck => deck.id === id)

          if (itemToUpdateIndex === -1) {
            return
          }

          draft.items[itemToUpdateIndex] = {
            ...draft.items[itemToUpdateIndex],
            ...args,
            cover: uploadedImageUrl ?? null,
          }
        })
      )
    )
  })

  try {
    await queryFulfilled
  } catch (e) {
    patchResults.forEach(patchResult => {
      patchResult.undo()
    })
  } finally {
    if (uploadedImageUrl) {
      URL.revokeObjectURL(uploadedImageUrl)
    }
  }
}
