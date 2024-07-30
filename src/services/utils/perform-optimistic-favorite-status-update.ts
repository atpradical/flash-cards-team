import { AppDispatch, AppGetState, decksApi } from '@/services'

type PerformOptimisticFavoriteStatusUpdate = {
  dispatch: AppDispatch
  getState: AppGetState
  id: string
  isFavorite: boolean
}

export function performOptimisticFavoriteStatusUpdate({
  dispatch,
  getState,
  id,
  isFavorite,
}: PerformOptimisticFavoriteStatusUpdate) {
  const cachedDecksArgsForQuery = decksApi.util.selectCachedArgsForQuery(getState(), 'getDecks')
  const patchDecksResults: any[] = []

  cachedDecksArgsForQuery.forEach(cachedArgs => {
    patchDecksResults.push(
      dispatch(
        decksApi.util.updateQueryData('getDecks', cachedArgs, draft => {
          const itemToUpdateIndex = draft.items.findIndex(deck => deck.id === id)

          if (itemToUpdateIndex === -1) {
            return
          }

          draft.items[itemToUpdateIndex] = {
            ...draft.items[itemToUpdateIndex],
            isFavorite,
          }
        })
      )
    )
  })

  return patchDecksResults
}
