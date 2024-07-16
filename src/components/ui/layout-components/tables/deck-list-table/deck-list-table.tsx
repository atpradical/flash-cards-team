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
  onSort: (orderBy: string) => void
}

export const DeckListTable = ({ decks, onSort }: DecksListTableProps) => {
  const [deckId, setDeckId] = useState('')
  const [showEditDeckDialog, setShowEditDeckDialog] = useState(false)
  const [showDeleteDeckDialog, setShowDeleteDeckDialog] = useState(false)
  const [sortId, setSortId] = useState('')

  const sortHandler = (orderBy: string, sortId: string) => {
    setSortId(sortId)
    onSort(orderBy)
  }

  const deckData = decks.find(el => el.id === deckId) ?? ({} as Deck)

  const tableRows = decks.map(el => {
    const cover = el.cover ?? dummyCover
    const cardsCount = el.cardsCount.toString()
    const updated = convertToDDMMYYYY(el.updated)
    const learnDeckPath = generatePath(PATH.DECK, { deckId: el.id })

    const openEditDeckHandler = (deckId: string) => {
      setDeckId(deckId)
      setShowEditDeckDialog(true)
    }

    const openDeleteDeckHandler = (deckId: string) => {
      setDeckId(deckId)
      setShowDeleteDeckDialog(true)
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
            isFavorite={el.isFavorite}
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
          <HeaderCell content={'Name'} id={'name'} onSort={sortHandler} sortId={sortId} />
          <HeaderCell content={'Cards'} id={'cardsCount'} onSort={sortHandler} sortId={sortId} />
          <HeaderCell
            content={'Last Updated'}
            id={'updated'}
            onSort={sortHandler}
            sortId={sortId}
          />
          <HeaderCell content={'Created by'} id={'created'} onSort={sortHandler} sortId={sortId} />
          <HeaderCell content={'Actions'} sortable={false} />
        </TableRow>
      </TableHeader>
      <TableBody>{tableRows}</TableBody>
      {showEditDeckDialog && (
        <DeckDialogForm
          action={DIALOG_ACTION.UPDATE}
          deck={deckData}
          onOpenChange={setShowEditDeckDialog}
          open={showEditDeckDialog}
        />
      )}
      <DeleteDialogForm
        entity={DIALOG_ENTITY.DECK}
        entityId={deckId}
        name={deckData.name ?? 'Deck name'}
        onOpenChange={setShowDeleteDeckDialog}
        open={showDeleteDeckDialog}
      />
    </TableContainer>
  )
}
