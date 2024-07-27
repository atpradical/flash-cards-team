import { useState } from 'react'

import dummyCover from '@/assets/webp/dummy-cover.webp'
import { Card } from '@/services'
import { convertToDDMMYYYY } from '@/shared/utils/convert-date-ddmmyyyy'

export const useDeckTableData = (cards: Card[]) => {
  const [cardId, setCardId] = useState('')
  const [showUpdateCardDialogForm, setShowUpdateCardDialogForm] = useState(false)
  const [showDeleteCardDialogForm, setShowDeleteCardDialogForm] = useState(false)

  const cardData = cards.find(el => el.id === cardId) ?? ({} as Card)

  const processCardData = (el: Card) => {
    const questionCover = el.questionImg ?? dummyCover
    const answerCover = el.answerImg ?? dummyCover
    const updated = convertToDDMMYYYY(el.updated)

    return {
      answerCover,
      questionCover,
      updated,
    }
  }

  const onEditHandler = (cardId: string) => {
    setCardId(cardId)
    setShowUpdateCardDialogForm(true)
  }

  const onDeleteHandler = (cardId: string) => {
    setCardId(cardId)
    setShowDeleteCardDialogForm(true)
  }

  return {
    cardData,
    cardId,
    onDeleteHandler,
    onEditHandler,
    processCardData,
    setShowDeleteCardDialogForm,
    setShowUpdateCardDialogForm,
    showDeleteCardDialogForm,
    showUpdateCardDialogForm,
  }
}
