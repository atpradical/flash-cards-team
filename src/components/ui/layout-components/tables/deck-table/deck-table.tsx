import { useState } from 'react'

import { CardDialogForm, DeleteDialogForm } from '@/components/forms'
import { Actions } from '@/components/ui/layout-components/actions'
import { Grade, TableBody, TableContainer, TableHeader, TableRow } from '@/components/ui/primitives'
import { Card } from '@/services/cards/cards.types'
import { DIALOG_ACTION, DIALOG_ENTITY, VARIANT } from '@/shared/enums'
import { useDeckTableData, useSearchParamUpdater } from '@/shared/hooks'

import s from './deck-table.module.scss'

import { HeaderCell, PositionCell } from '../container-components'

type DeckTableProps = {
  cards: Card[]
  isAuthor: boolean
}

export const DeckTable = ({ cards, isAuthor }: DeckTableProps) => {
  const [sortId, setSortId] = useState('')
  const updateSearchParam = useSearchParamUpdater()

  const sortHandler = (orderBy: string, sortId: string) => {
    setSortId(sortId)
    updateSearchParam({ currentPage: 1, orderBy })
  }

  const {
    cardData,
    cardId,
    onDeleteHandler,
    onEditHandler,
    processCardData,
    setShowDeleteCardDialogForm,
    setShowUpdateCardDialogForm,
    showDeleteCardDialogForm,
    showUpdateCardDialogForm,
  } = useDeckTableData(cards)

  const TableContent = cards.map(el => {
    const { answerCover, questionCover, truncatedAnswer, truncatedQuestion, updated } =
      processCardData(el)

    return (
      <TableRow key={el.id}>
        <PositionCell content={truncatedQuestion} entity={'Question'} image={questionCover} />
        <PositionCell content={truncatedAnswer} entity={'Answer'} image={answerCover} />
        <PositionCell content={updated} />
        <PositionCell>
          <Grade stars={el.grade} />
        </PositionCell>
        {isAuthor && (
          <PositionCell>
            <Actions
              id={el.id}
              onDelete={() => onDeleteHandler(el.id)}
              onEdit={() => onEditHandler(el.id)}
              variant={VARIANT.ONLY_EDITS}
            />
          </PositionCell>
        )}
      </TableRow>
    )
  })

  return (
    <TableContainer>
      <TableHeader>
        <TableRow>
          <HeaderCell
            className={s.column1}
            content={'Question'}
            id={'question'}
            onSort={sortHandler}
            sortId={sortId}
          />
          <HeaderCell
            className={s.column2}
            content={'Answer'}
            id={'answer'}
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
            content={'Grade'}
            id={'grade'}
            onSort={sortHandler}
            sortId={sortId}
          />
          {isAuthor && <HeaderCell className={s.column5} content={'Actions'} sortable={false} />}
        </TableRow>
      </TableHeader>
      <TableBody>{TableContent}</TableBody>
      <CardDialogForm
        action={DIALOG_ACTION.UPDATE}
        card={cardData}
        key={cardData?.id}
        onOpenChange={setShowUpdateCardDialogForm}
        open={showUpdateCardDialogForm}
      />
      <DeleteDialogForm
        entity={DIALOG_ENTITY.CARD}
        entityId={cardId}
        name={cardData?.question ?? ''}
        onOpenChange={setShowDeleteCardDialogForm}
        open={showDeleteCardDialogForm}
      />
    </TableContainer>
  )
}
