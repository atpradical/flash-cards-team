import { useState } from 'react'
import { Link, generatePath } from 'react-router-dom'

import dummyCover from '@/assets/webp/dummy-cover.webp'
import { DeckDialogForm, DeleteDialogForm } from '@/components/forms'
import { Actions } from '@/components/ui/layout-components/actions'
import {
  TableBody,
  TableContainer,
  TableHeader,
  TableRow,
  Typography,
} from '@/components/ui/primitives'
import { Deck } from '@/services/decks/deck.types'
import { DIALOG_ACTION, DIALOG_ENTITY, PATH, VARIANT } from '@/shared/enums'
import { convertToDDMMYYYY } from '@/shared/utils/convert-date-ddmmyyyy'
import clsx from 'clsx'

import s from './deck-list-table.module.scss'

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

  const cn = {
    link: clsx(s.link),
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
          <Typography as={Link} className={cn.link} to={deckPath}>
            {el.name}
          </Typography>
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
          <HeaderCell content={'Name'} onClick={sortHandler} />
          <HeaderCell content={'Cards'} onClick={sortHandler} />
          <HeaderCell content={'Last Updated'} onClick={sortHandler} />
          <HeaderCell content={'Created by'} onClick={sortHandler} />
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
