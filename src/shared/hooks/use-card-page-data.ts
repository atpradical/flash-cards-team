import { useCallback, useState } from 'react'
import { generatePath, useParams } from 'react-router-dom'

import { useGetDeckQuery, useGetRandomCardQuery, useSaveGradeOfCardMutation } from '@/services'
import { PATH } from '@/shared/enums'
import { combineLoadingStates } from '@/shared/utils'

export const useCardPageData = () => {
  const { deckId } = useParams()
  const deckPagePath = deckId && generatePath(PATH.DECK, { deckId })

  const { data: deck, isFetching: isDeckFetching } = useGetDeckQuery({ id: deckId ?? '' })
  const { data: randomCard, isLoading: isRandomCardFetching } = useGetRandomCardQuery({
    id: deckId ?? '',
  })

  const [showAnswer, setShowAnswer] = useState(false)

  const [saveGrade, { isLoading: isSaveGradeLoading }] = useSaveGradeOfCardMutation()

  const nextQuestionHandler = useCallback(
    async (cardId: string, grade: number) => {
      const result = await saveGrade({ cardId, grade, id: deck?.id ?? '' })

      if (result) {
        setShowAnswer(false)
      }
    },
    [deck?.id, saveGrade]
  )

  const isLoad = combineLoadingStates(isDeckFetching, isRandomCardFetching, isSaveGradeLoading)

  return { deck, deckPagePath, isLoad, nextQuestionHandler, randomCard, setShowAnswer, showAnswer }
}
