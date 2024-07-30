import { AppDispatch, AppGetState, decksApi } from '@/services'

type UpdateDeckFavoriteStatus = {
  dispatch: AppDispatch
  getState: AppGetState
  id: string
  isFavorite: boolean
}

export function changeDeckFavoriteStatus({
  dispatch,
  getState,
  id,
  isFavorite,
}: UpdateDeckFavoriteStatus) {
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
