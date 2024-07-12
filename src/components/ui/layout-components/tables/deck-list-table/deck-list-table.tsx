import { useState } from 'react'
import { generatePath } from 'react-router-dom'

import dummyCover from '@/assets/webp/dummy-cover.webp'
import { DeckDialogForm, DeleteDialogForm } from '@/components/forms'
import { Actions } from '@/components/ui/layout-components/actions'
import { TableBody, TableContainer, TableHeader, TableRow } from '@/components/ui/primitives'
import { Deck } from '@/services/decks/deck.types'
import { DIALOG_ACTION, DIALOG_ENTITY, PATH, VARIANT } from '@/shared/enums'
import { convertToDDMMYYYY } from '@/shared/utils/convert-date-ddmmyyyy'

import { HeaderCell, PositionCell } from '../container-components'

type DecksListTableProps = {
  decks: Deck[]
  onSort: () => void
}

export const DeckListTable = ({ decks, onSort }: DecksListTableProps) => {
  const [deckId, setDeckId] = useState('')
  const [showEditDeckDialog, setShowEditDeckDialog] = useState(false)
  const [showDeleteDeckDialog, setShowDeleteDeckDialog] = useState(false)
  const sortHandler = () => {
    onSort()
  }

  const TableContent = decks.map(el => {
    const cover = el.cover ?? dummyCover
    const cardsCount = el.cardsCount.toString()
    const updated = convertToDDMMYYYY(el.updated)
    const learnDeckPath = generatePath(PATH.DECK, { deckId: el.id })

    const openEditDeckHandler = (deckId: string) => {
      setDeckId(deckId)
      setShowEditDeckDialog(!showEditDeckDialog)
    }

    const openDeleteDeckHandler = (deckId: string) => {
      setDeckId(deckId)
      setShowDeleteDeckDialog(!showDeleteDeckDialog)
    }

    return (
      <TableRow key={el.id}>
        <PositionCell content={el.name} entity={'Deck'} image={cover} />
        <PositionCell content={cardsCount} />
        <PositionCell content={updated} />
        <PositionCell content={el.author.name} />
        <PositionCell>
          <Actions
            id={el.id}
            onDelete={() => openDeleteDeckHandler(el.id)}
            onEdit={() => openEditDeckHandler(el.id)}
            onLearn={learnDeckPath}
            variant={VARIANT.ALL}
          />
        </PositionCell>
      </TableRow>
    )
  })

  return (
    <TableContainer>
      <TableHeader>
        <TableRow>
          <HeaderCell content={'Name'} onClick={sortHandler} />
          <HeaderCell content={'Cards'} onClick={sortHandler} />
          <HeaderCell content={'Last Updated'} onClick={sortHandler} />
          <HeaderCell content={'Created by'} onClick={sortHandler} />
          <HeaderCell content={'Actions'} sortable={false} />
        </TableRow>
      </TableHeader>
      <TableBody>{TableContent}</TableBody>
      <DeckDialogForm
        action={DIALOG_ACTION.UPDATE}
        deckId={deckId}
        onOpenChange={setShowEditDeckDialog}
        open={showEditDeckDialog}
      />
      <DeleteDialogForm
        entity={DIALOG_ENTITY.DECK}
        entityId={deckId}
        name={'Name Deck'}
        onOpenChange={setShowDeleteDeckDialog}
        onSubmit={() => console.log('delete dialog form submit invoked!')}
        open={showDeleteDeckDialog}
      />
    </TableContainer>
  )
}
