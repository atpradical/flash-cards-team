import { useCallback, useMemo, useState } from 'react'
import { generatePath } from 'react-router-dom'

import dummyCover from '@/assets/webp/dummy-cover.webp'
import { Deck, User } from '@/services'
import { PATH } from '@/shared/enums'
import { convertToDDMMYYYY } from '@/shared/utils/convert-date-ddmmyyyy'

export const useDeckListData = (decks: Deck[], user: User) => {
  const [deckId, setDeckId] = useState('')
  const [showEditDeckDialog, setShowEditDeckDialog] = useState(false)
  const [showDeleteDeckDialog, setShowDeleteDeckDialog] = useState(false)

  const deckData = useMemo(() => decks.find(el => el.id === deckId), [decks, deckId])

  const processDeckData = useMemo(
    () => (el: Deck) => {
      const cover = el.cover ?? dummyCover
      const cardsCount = el.cardsCount.toString()
      const updated = convertToDDMMYYYY(el.updated)
      const deckPath = generatePath(PATH.DECK, { deckId: el.id })
      const learnDeckPath = generatePath(PATH.CARD_LEARN, { deckId: el.id })
      const isAuthor = el.userId === user.id

      return {
        cardsCount,
        cover,
        deckPath,
        isAuthor,
        learnDeckPath,
        updated,
      }
    },
    [user.id]
  )
  const openEditDeckHandler = useCallback((deckId: string) => {
    setDeckId(deckId)
    setShowEditDeckDialog(true)
  }, [])

  const openDeleteDeckHandler = useCallback((deckId: string) => {
    setDeckId(deckId)
    setShowDeleteDeckDialog(true)
  }, [])

  return {
    deckData,
    deckId,
    openDeleteDeckHandler,
    openEditDeckHandler,
    processDeckData,
    setShowDeleteDeckDialog,
    setShowEditDeckDialog,
    showDeleteDeckDialog,
    showEditDeckDialog,
  }
}
