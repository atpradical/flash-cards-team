import { useState } from 'react'

import dummyCover from '@/assets/webp/dummy-cover.webp'
import { CardDialogForm, DeleteDialogForm } from '@/components/forms'
import { Actions } from '@/components/ui/layout-components/actions'
import { Grade, TableBody, TableContainer, TableHeader, TableRow } from '@/components/ui/primitives'
import { Card } from '@/services/cards/cards.types'
import { DIALOG_ACTION, DIALOG_ENTITY, VARIANT } from '@/shared/enums'
import { convertToDDMMYYYY } from '@/shared/utils/convert-date-ddmmyyyy'

import { HeaderCell, PositionCell } from '../container-components'

type DeckTableProps = {
  cards: Card[]
  onSort: () => void
}

export const DeckTable = ({ cards, onSort }: DeckTableProps) => {
  const [showUpdateCardDialogForm, setShowUpdateCardDialogForm] = useState(false)
  const [showDeleteCardDialogForm, setShowDeleteCardDialogForm] = useState(false)
  const [cardId, setCardId] = useState('')
  const cardData = cards.find(el => el.id === cardId) ?? ({} as Card)

  const sortHandler = () => {
    onSort()
  }

  const TableContent = cards.map(el => {
    const questionCover = el.questionImg ?? dummyCover
    const answerCover = el.answerImg ?? dummyCover
    const updated = convertToDDMMYYYY(el.updated)

    const onEditHandler = (cardId: string) => {
      setCardId(cardId)
      setShowUpdateCardDialogForm(true)
    }
    const onDeleteHandler = (cardId: string) => {
      setCardId(cardId)
      setShowDeleteCardDialogForm(true)
    }

    return (
      <TableRow key={el.id}>
        <PositionCell content={el.question} entity={'Question'} image={questionCover} />
        <PositionCell content={el.answer} entity={'Answer'} image={answerCover} />
        <PositionCell content={updated} />
        <PositionCell>
          <Grade stars={el.grade} />
        </PositionCell>
        <PositionCell>
          <Actions
            id={el.id}
            onDelete={() => onDeleteHandler(el.id)}
            onEdit={() => onEditHandler(el.id)}
            onLearn={''}
            // todo: определять variant для actions по isAuth
            variant={VARIANT.ONLY_EDITS}
          />
        </PositionCell>
      </TableRow>
    )
  })

  return (
    <TableContainer>
      <TableHeader>
        <TableRow>
          <HeaderCell content={'Question'} onClick={sortHandler} />
          <HeaderCell content={'Answer'} onClick={sortHandler} />
          <HeaderCell content={'Last Updated'} onClick={sortHandler} />
          <HeaderCell content={'Grade'} onClick={sortHandler} />
          <HeaderCell content={'Actions'} sortable={false} />
        </TableRow>
      </TableHeader>
      <TableBody>{TableContent}</TableBody>
      {showUpdateCardDialogForm && (
        <CardDialogForm
          action={DIALOG_ACTION.UPDATE}
          card={cardData}
          onOpenChange={setShowUpdateCardDialogForm}
          open={showUpdateCardDialogForm}
        />
      )}
      <DeleteDialogForm
        entity={DIALOG_ENTITY.CARD}
        entityId={cardId}
        name={cardData.question ?? ''}
        onOpenChange={setShowDeleteCardDialogForm}
        open={showDeleteCardDialogForm}
      />
    </TableContainer>
  )
}
