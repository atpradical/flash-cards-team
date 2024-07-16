import { useEffect, useState } from 'react'
import { Link, generatePath } from 'react-router-dom'

import dummyCover from '@/assets/webp/dummy-cover.webp'
import { SortCriteria } from '@/common/types'
import { DeckDialogForm, DeleteDialogForm } from '@/components/forms'
import { Actions } from '@/components/ui/layout-components/actions'
import {
  Button,
  TableBody,
  TableContainer,
  TableHeader,
  TableRow,
} from '@/components/ui/primitives'
import { Deck } from '@/services/decks/deck.types'
import { DIALOG_ACTION, DIALOG_ENTITY, PATH, VARIANT } from '@/shared/enums'
import { convertToDDMMYYYY } from '@/shared/utils/convert-date-ddmmyyyy'
import { getSortString } from '@/shared/utils/get-order-by-string'
import clsx from 'clsx'

import s from './deck-list-table.module.scss'

import { HeaderCell, PositionCell } from '../container-components'

type DecksListTableProps = {
  decks: Deck[]
  onSort: (orderBy: string) => void
}

export const DeckListTable = ({ decks, onSort }: DecksListTableProps) => {
  const [deckId, setDeckId] = useState('')
  const [showEditDeckDialog, setShowEditDeckDialog] = useState(false)
  const [showDeleteDeckDialog, setShowDeleteDeckDialog] = useState(false)
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>(null)
  const [sortId, setSortId] = useState('')

  // todo: check with Andrey: Warning: Cannot update a component (`DeckListPage`) while rendering a different component (`DeckListTable`). To locate the bad setState() call inside `DeckListTable`.
  useEffect(() => {
    onSort(getSortString(sortCriteria))
  }, [onSort, sortCriteria])

  const sortHandler = (newSortCriteria: SortCriteria) => {
    setSortId(newSortCriteria?.id ?? '')
    setSortCriteria(newSortCriteria)
    onSort(getSortString(sortCriteria))
  }

  const deckData = decks.find(el => el.id === deckId) ?? ({} as Deck)

  const TableContent = decks.map(el => {
    const cover = el.cover ?? dummyCover
    const cardsCount = el.cardsCount.toString()
    const updated = convertToDDMMYYYY(el.updated)
    const deckPath = generatePath(PATH.DECK, { deckId: el.id })
    const learnDeckPath = generatePath(PATH.CARD_LEARN, { deckId: el.id })

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
        <PositionCell entity={'Deck'} image={cover}>
          <Button as={Link} className={clsx(s.link)} to={deckPath} variant={'link'}>
            {el.name}
          </Button>
        </PositionCell>
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
            // todo: определять variant для actions по isAuth
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
      <TableBody>{TableContent}</TableBody>
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
