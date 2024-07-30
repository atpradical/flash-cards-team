import { AppDispatch, AppGetState, UpdateDeckArgs, decksApi } from '@/services'

type PerformOptimisticDeckUpdate = {
  args: UpdateDeckArgs
  dispatch: AppDispatch
  getState: AppGetState
}

export function performOptimisticDeckUpdate({
  args,
  dispatch,
  getState,
}: PerformOptimisticDeckUpdate) {
  const cachedDecksArgsForQuery = decksApi.util.selectCachedArgsForQuery(getState(), 'getDecks')

  const patchDecksResults: any[] = []
  const coverImg = args.cover && URL.createObjectURL(args.cover)

  cachedDecksArgsForQuery.forEach(cachedArgs => {
    patchDecksResults.push(
      dispatch(
        decksApi.util.updateQueryData('getDecks', cachedArgs, draft => {
          const itemToUpdateIndex = draft.items.findIndex(deck => deck.id === args.id)

          if (itemToUpdateIndex === -1) {
            return
          }

          draft.items[itemToUpdateIndex] = {
            ...draft.items[itemToUpdateIndex],
            ...args,
            cover: coverImg !== undefined ? coverImg : draft.items[itemToUpdateIndex].cover,
          }
        })
      )
    )
  })

  // check if deck with relevant id exist in cache, if true update it as well
  const cachedDeck = decksApi.endpoints.getDeck.select({ id: args.id })(getState())

  let patchDeckResult: any = null

  if (cachedDeck.data) {
    patchDeckResult = dispatch(
      decksApi.util.updateQueryData('getDeck', { id: args.id }, draft => {
        Object.assign(draft, {
          ...draft,
          ...args,
          cover: coverImg !== undefined ? coverImg : draft.cover,
        })
      })
    )
  }

  return { coverImg, patchDeckResult, patchDecksResults }
}
