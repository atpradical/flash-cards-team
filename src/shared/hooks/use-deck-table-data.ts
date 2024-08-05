import { useState } from 'react'

import dummyCover from '@/assets/webp/dummy-cover.webp'
import { Card } from '@/services'
import { convertToDDMMYYYY } from '@/shared/utils/convert-date-ddmmyyyy'

import { MAX_LENGTH } from '../enums'
import { truncateString } from '../utils'

export const useDeckTableData = (cards: Card[]) => {
  const [cardId, setCardId] = useState('')
  const [showUpdateCardDialogForm, setShowUpdateCardDialogForm] = useState(false)
  const [showDeleteCardDialogForm, setShowDeleteCardDialogForm] = useState(false)

  const cardData = cards.find(el => el.id === cardId)

  const processCardData = (el: Card) => {
    const questionCover = el.questionImg ?? dummyCover
    const answerCover = el.answerImg ?? dummyCover
    const updated = convertToDDMMYYYY(el.updated)

    const truncatedQuestion = truncateString(el.question, MAX_LENGTH.DEFAULT)
    const truncatedAnswer = truncateString(el.answer, MAX_LENGTH.DEFAULT)

    return {
      answerCover,
      questionCover,
      truncatedAnswer,
      truncatedQuestion,
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
