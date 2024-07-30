import { AppDispatch, AppGetState, UpdateCardArgs, cardsApi } from '@/services'

type PerformOptimisticCardUpdate = {
  args: UpdateCardArgs
  dispatch: AppDispatch
  getState: AppGetState
}

export function performOptimisticCardUpdate({
  args,
  dispatch,
  getState,
}: PerformOptimisticCardUpdate) {
  const cachedCardsArgsForQuery = cardsApi.util.selectCachedArgsForQuery(getState(), 'getCards')

  const patchCardsResults: any[] = []
  const questionImg = args.questionImg && URL.createObjectURL(args.questionImg)
  const answerImg = args.answerImg && URL.createObjectURL(args.answerImg)

  cachedCardsArgsForQuery.forEach(cachedArgs => {
    patchCardsResults.push(
      dispatch(
        cardsApi.util.updateQueryData('getCards', cachedArgs, draft => {
          const itemToUpdateIndex = draft.items.findIndex(card => card.id === args.id)

          if (itemToUpdateIndex === -1) {
            return
          }

          draft.items[itemToUpdateIndex] = {
            ...draft.items[itemToUpdateIndex],
            ...args,
            answer: args.answer ?? draft.items[itemToUpdateIndex].answer,
            answerImg:
              answerImg !== undefined ? answerImg : draft.items[itemToUpdateIndex].answerImg,
            question: args.question ?? draft.items[itemToUpdateIndex].question,
            questionImg:
              questionImg !== undefined ? questionImg : draft.items[itemToUpdateIndex].questionImg,
          }
        })
      )
    )
  })

  return { answerImg, patchCardsResults, questionImg }
}
