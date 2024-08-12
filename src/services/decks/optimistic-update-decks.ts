import { AppDispatch, RootState } from '@/services'
import { UpdateDeckArgs, UpdateDeckResponse } from '@/services/decks'
import { decksApi } from '@/services/decks/decks-api'
import { Nullable } from '@/shared/types/common'

type OptimisticUpdateContext = {
  dispatch: AppDispatch
  getState: () => RootState
  queryFulfilled: Promise<{ data: UpdateDeckResponse }>
}

export async function optimisticUpdateDecks(
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

  patchResults.push(
    dispatch(
      decksApi.util.updateQueryData('getDeck', { id }, draft => {
        draft.name = args.name ?? draft.name
        draft.isPrivate = args.isPrivate ?? draft.isPrivate
        draft.cover = uploadedImageUrl ?? draft.cover
      })
    )
  )

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
