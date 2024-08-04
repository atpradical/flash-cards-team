import { useState } from 'react'
import { Link } from 'react-router-dom'

import { DeckDialogForm, DeleteDialogForm } from '@/components/forms'
import { Actions } from '@/components/ui/layout-components/actions'
import {
  Button,
  TableBody,
  TableContainer,
  TableHeader,
  TableRow,
} from '@/components/ui/primitives'
import { User } from '@/services'
import { Deck } from '@/services/decks/deck.types'
import { DIALOG_ACTION, DIALOG_ENTITY, VARIANT } from '@/shared/enums'
import { useDeckListData, useSearchParamUpdater } from '@/shared/hooks'

import s from './deck-list-table.module.scss'

import { HeaderCell, PositionCell } from '../container-components'

type DecksListTableProps = {
  decks: Deck[]
  user: User
}

export const DeckListTable = ({ decks, user }: DecksListTableProps) => {
  const [sortId, setSortId] = useState('')
  const updateSearchParam = useSearchParamUpdater()

  const {
    deckData,
    deckId,
    openDeleteDeckHandler,
    openEditDeckHandler,
    processDeckData,
    setShowDeleteDeckDialog,
    setShowEditDeckDialog,
    showDeleteDeckDialog,
    showEditDeckDialog,
  } = useDeckListData(decks, user)

  const sortHandler = (orderBy: string, sortId: string) => {
    setSortId(sortId)
    updateSearchParam({ currentPage: 1, orderBy })
  }

  const tableRows = decks.map(el => {
    const { cardsCount, cover, deckPath, isAuthor, learnDeckPath, updated } = processDeckData(el)

    return (
      <TableRow key={el.id}>
        <PositionCell entity={'Deck'} image={cover}>
          <Button
            as={Link}
            className={s.link}
            title={'Go to deck cards'}
            to={deckPath}
            variant={'link'}
          >
            {el.name}
          </Button>
        </PositionCell>
        <PositionCell content={cardsCount} />
        <PositionCell content={updated} />
        <PositionCell content={el.author.name} />
        <PositionCell>
          <Actions
            id={el.id}
            isEmptyDeck={el.cardsCount === 0}
            isFavorite={el.isFavorite}
            onDelete={() => openDeleteDeckHandler(el.id)}
            onEdit={() => openEditDeckHandler(el.id)}
            onLearn={learnDeckPath}
            variant={isAuthor ? VARIANT.ALL : VARIANT.ONLY_LEARN}
          />
        </PositionCell>
      </TableRow>
    )
  })

  return (
    <TableContainer style={{ maxWidth: '1280px' }}>
      <TableHeader>
        <TableRow>
          <HeaderCell
            className={s.column1}
            content={'Name'}
            id={'name'}
            onSort={sortHandler}
            sortId={sortId}
          />
          <HeaderCell
            className={s.column2}
            content={'Cards'}
            id={'cardsCount'}
            onSort={sortHandler}
            sortId={sortId}
          />
          <HeaderCell
            className={s.column3}
            content={'Last Updated'}
            id={'updated'}
            onSort={sortHandler}
            sortId={sortId}
          />
          <HeaderCell
            className={s.column4}
            content={'Created by'}
            id={'author.name'}
            onSort={sortHandler}
            sortId={sortId}
          />
          <HeaderCell className={s.column5} content={'Actions'} sortable={false} />
        </TableRow>
      </TableHeader>
      <TableBody>{tableRows}</TableBody>
      {showEditDeckDialog && (
        <DeckDialogForm
          action={DIALOG_ACTION.UPDATE}
          deck={deckData}
          key={deckData?.id}
          onOpenChange={setShowEditDeckDialog}
          open={showEditDeckDialog}
        />
      )}
      <DeleteDialogForm
        entity={DIALOG_ENTITY.DECK}
        entityId={deckId}
        name={deckData?.name ?? 'Deck name'}
        onOpenChange={setShowDeleteDeckDialog}
        open={showDeleteDeckDialog}
      />
    </TableContainer>
  )
}
