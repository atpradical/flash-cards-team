import { AppDispatch, RootState } from '@/services'
import { UpdateCardArgs, UpdateCardResponse } from '@/services/cards'
import { cardsApi } from '@/services/cards/cards-api'
import { createUploadedImageURL } from '@/shared/utils'

type OptimisticUpdateContext = {
  dispatch: AppDispatch
  getState: () => RootState
  queryFulfilled: Promise<{ data: UpdateCardResponse }>
}

export async function optimisticUpdateCards(
  { answerImg, id, questionImg, ...args }: UpdateCardArgs,
  { dispatch, getState, queryFulfilled }: OptimisticUpdateContext
) {
  const cachedArgsForQuery = cardsApi.util.selectCachedArgsForQuery(getState(), 'getCards')
  const patchResults: any[] = []

  const uploadedImageAnswer = createUploadedImageURL(answerImg)
  const uploadedImageQuestion = createUploadedImageURL(questionImg)

  cachedArgsForQuery.forEach(cachedArgs => {
    patchResults.push(
      dispatch(
        cardsApi.util.updateQueryData('getCards', cachedArgs, draft => {
          const itemToUpdateIndex = draft.items.findIndex(card => card.id === id)

          if (itemToUpdateIndex === -1) {
            return
          }

          draft.items[itemToUpdateIndex] = {
            ...draft.items[itemToUpdateIndex],
            ...args,
            answerImg: uploadedImageAnswer ?? null,
            questionImg: uploadedImageQuestion ?? null,
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
    if (uploadedImageAnswer) {
      URL.revokeObjectURL(uploadedImageAnswer)
    }
    if (uploadedImageQuestion) {
      URL.revokeObjectURL(uploadedImageQuestion)
    }
  }
}
