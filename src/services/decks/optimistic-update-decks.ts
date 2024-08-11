import { Nullable } from '@/shared/types/common'

import { UpdateDeckArgs } from './deck.types'
import { decksApi } from './decks-api'

export async function optimisticUpdate(
  { cover, id, ...args }: UpdateDeckArgs,
  { dispatch, getState, queryFulfilled }: any
) {
  const cachedArgsForQuery = decksApi.util.selectCachedArgsForQuery(getState(), 'getDecks')
  const patchResults: any[] = []

  cachedArgsForQuery.forEach(cachedArgs => {
    patchResults.push(
      dispatch(
        decksApi.util.updateQueryData('getDecks', cachedArgs, draft => {
          const itemToUpdateIndex = draft.items.findIndex(deck => deck.id === id)

          console.log('draft.items', draft.items)
          console.log('itemToUpdateIndex', itemToUpdateIndex)
          if (itemToUpdateIndex === -1) {
            return
          }

          let coverString: Nullable<string> = null

          // debugger
          console.log('cover', cover) //сюда при смене картинки приходит File тип
          if (typeof cover === 'string') {
            coverString = cover
          }

          draft.items[itemToUpdateIndex] = {
            ...draft.items[itemToUpdateIndex],
            ...args,
            cover: coverString,
          }
        })
      )
    )
  })
  console.log('patchResults', patchResults)
  try {
    await queryFulfilled
  } catch (e) {
    patchResults.forEach(patchResult => {
      patchResult.undo()
    })
  }
}
